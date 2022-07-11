const fs = require('fs/promises');
const path = require('path');

const parseBundleJs = (props) => {
    let jsFile;
    let cssFile;
    for (el in props) {
        if (el.endsWith('.js')) { jsFile = el.split('/')[1] }
        if (el.endsWith('.css')) { cssFile = el.split('/')[1] }
    }
    return {
        js: jsFile,
        css: cssFile
    }
}

const copyStaticPlugin = (props) => {
    return {
        name: 'CopyStaticPlugin',
        setup(build) {
            const outDir = build.initialOptions.outdir;
            build.onEnd(async (result) => {
                const bundle = parseBundleJs(result.metafile.outputs);
                const staticDirPath = path.resolve(__dirname, '..', '..', 'static');
                const static = await fs.readdir(staticDirPath);
                const index = await fs.readFile(path.resolve(outDir, '..', 'index.html'));

                static.forEach(async (el) => {
                    await fs.copyFile(path.resolve(__dirname, '..', '..', 'static', el), path.resolve(outDir, el));
                });
                await fs.writeFile(path.resolve(outDir, 'index.html'),
                    index.toString()
                        .replace(
                            '<script src="index.js"></script>',
                            `<script type = "text/javascript" src="${bundle.js}"></script>`
                        ).replace(
                            '<link rel="stylesheet" href="css/index.css">',
                            `<link href="${bundle.css}" rel="stylesheet">`
                        )
                );
                console.log('copy static finished');
            })
        }
    }
}

module.exports = copyStaticPlugin;