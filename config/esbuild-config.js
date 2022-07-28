const path = require('path');
const CleanPlugin = require('./plugin/CleanPlugin.js');
const CopyStaticPlugingin = require('./plugin/CopyStaticPlugin.js');
const sassPlugin = require("esbuild-plugin-sass");

function resolvePath(...segments) {
    return path.resolve(__filename, '..', '..', ...segments);
}

const config = {
    outdir: resolvePath('build'),
    entryNames: '[name]',
    loader: {
        '.png': 'file',
        '.jpeg': 'file',
        '.svg': 'file',
        '.otf': 'file'
    },
    entryPoints: [resolvePath('js', 'index.js'), resolvePath('admin', 'admin-menu.js')],
    metafile: true,
    plugins: [CleanPlugin, CopyStaticPlugingin({}), sassPlugin()],
    watch: {
        onRebuild(err, res) {
            if (err) {
                console.error(err);
            } else {
                console.log('Build is finished');
            }
        }
    },
    bundle: true
}

module.exports = {
    ...config
}
