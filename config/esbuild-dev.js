const ESBuild = require('esbuild');
const config = require('./esbuild-config');
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'build/')));
app.listen('3000', () => { console.log('dev server started on http://localhost:3000') });

ESBuild.build({
    ...config,
    sourcemap: true
}).then(result => { });
