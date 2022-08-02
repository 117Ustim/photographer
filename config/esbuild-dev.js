const ESBuild = require('esbuild');
const config = require('./esbuild-config');
const path = require('path');

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err);
});

ESBuild.build({
    ...config,
    sourcemap: true
}).then(result => { });
