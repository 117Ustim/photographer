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

app.post('/save', upload.single('new-photo'), (req, resp) => {
    resp.sendFile('admin-foto.html', { root: path.resolve(__dirname, '..', 'build') });
})

app.get('/photos', async (req, resp) => {
    const photos = await fs.readdir('photos');
    resp.send({ 'photos': photos });
})

app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use('/photos', express.static('photos'));

app.listen('3000', () => { console.log('dev server started on http://localhost:3000') });