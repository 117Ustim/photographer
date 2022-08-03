const express = require('express');
const path = require('path');
const multer = require('multer')
const fs = require('fs/promises');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './photos')
    },
    filename: function (req, file, cb) {
        cb(null, `${req.params['category']}_${file.originalname}`) // добавление категории к названию фото
    }
})

const upload = multer({ storage: storage })
const app = express();

// сохранение фото в карусели
app.post('/save/:category', upload.single('new-photo'), (req, resp) => {
    resp.sendFile('admin-foto.html', { root: path.resolve(__dirname, '..', 'build') });
})

// загрузка фотографий по категориям
app.get('/photos', async (req, resp) => {
    const category = req.query.category; // получение категории из параметров запроса
    const photos = await fs.readdir('photos/'); // чтение папки с фотографиями

    resp.send({ 'photos': photos.filter(photo => photo.includes(category)) }); // фильтрация фото по категории
})

// удаление фотографий по категориям
app.delete('/photos/:id', async (req, resp) => {
    const requestPhotos = req.params.id.split(',') // получение списка названий фото
    const photosDir = await fs.readdir('photos/'); // чтение папки с фотографиями 
    const photosToDelete = photosDir.filter(p => requestPhotos.includes(p)); // фильтрация по названиям фото которые нужно удалить

    deletePhotos(photosToDelete); // удаление фото

    resp.sendStatus(200); // ответ от сервера -> http status 200
})

function deletePhotos(photos) {
    photos.forEach(async photo => {
        await fs.unlink(path.resolve(path.resolve(__dirname, '..', 'photos', photo)));
    })
}

app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use('/photos', express.static('photos'));

app.listen('3000', () => { console.log('dev server started on http://localhost:3000') });