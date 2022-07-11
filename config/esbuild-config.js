const path = require('path');
const CleanPlugin = require('./plugin/CleanPlugin.js');
const CopyStaticPlugingin = require('./plugin/CopyStaticPlugin.js');
const sassPlugin = require("esbuild-plugin-sass");

function resolvePath(...segments) {
    return path.resolve(__filename, '..', '..', ...segments);
}

const config = {
    outdir: resolvePath('build'),
    entryNames: '[dir]/bundle.[name]-[hash]',
    loader: {
        '.png': 'file',
        '.jpeg': 'file',
        '.svg': 'file',
        '.otf': 'file'
    },
    entryPoints: [resolvePath('js', 'index.js')],
    metafile: true,
    plugins: [CleanPlugin, CopyStaticPlugingin({}), sassPlugin()],
    watch: {
        onRebuild(err, res) {
            if (err) {
                console.error(err);
            } else {
                console.log('Build ...');
            }
        }
    },
    bundle: true
}

module.exports = {
    ...config
}
