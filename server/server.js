const express = require('express');
const path = require('path');
const cors = require('cors');
const multer = require('multer')
const fs = require('fs/promises');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './photos')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })

const app = express();
app.use(cors());

// сохранение фото в карусели
app.post('/save', upload.single('new-photo'), (req, resp) => {
    resp.sendFile('admin-foto.html', { root: path.resolve(__dirname, '..', 'build') });
})

// загрузка фотографий карусели
app.get('/photos', async (req, resp) => {
    const photos = await fs.readdir('photos');
    resp.send({ 'photos': photos });
})

app.get('/foto1', async (req, resp) => {
    const photos = await fs.readdir('foto1');
    resp.send({ 'photos': photos });
})

app.get('/photo-delete', async (req, resp) => {
    const photos = await fs.readdir('photos');
    console.log(req.query);
    const photoToDelete = photos.filter(p => p === req.query.photo);
    await fs.unlink(path.resolve( path.resolve(__dirname, '..', 'photos', photoToDelete[0])));
    // resp.sendFile('admin-foto.html', { root: path.resolve(__dirname, '..', 'build') });
    resp.send(''); 
})


app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use('/photos', express.static('photos'));

app.listen('3000', () => { console.log('dev server started on http://localhost:3000') });