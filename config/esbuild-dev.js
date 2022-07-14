const ESBuild = require('esbuild');
const config = require('./esbuild-config');
const path = require('path');

ESBuild.build({
    ...config,
    sourcemap: true
}).then(result => { });
