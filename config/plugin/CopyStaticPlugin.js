const fs = require('fs/promises');
const path = require('path');

const parseBundleJs = (props, filterBy) => {
    let jsFile = [];
    let cssFile = [];
    for (el in props) {
        if (el.endsWith('.js') && el.includes(filterBy)) { jsFile.push(el.split('/')[2]) }
        if (el.endsWith('.css') && el.includes(filterBy)) { cssFile.push(el.split('/')[2]) }
    }
    return {
        js: jsFile,
        css: cssFile
    }
}

const copyHtml = async (path, outDir, bundle) => {
    const page = await fs.readFile(path);
    await fs.writeFile(outDir, page);
}

const copyStaticPlugin = (props) => {
    return {
        name: 'CopyStaticPlugin',
        setup(build) {
            const outDir = build.initialOptions.outdir;
            build.onEnd(async (result) => {
                const staticDirPath = path.resolve(__dirname, '..', '..', 'static');
                const static = await fs.readdir(staticDirPath);

                static.forEach(async (el) => {
                    await fs.copyFile(path.resolve(__dirname, '..', '..', 'static', el), path.resolve(outDir, el));
                });

                copyHtml(
                    path.resolve(__dirname, '..', '..', 'index.html'),
                    path.resolve(outDir, 'index.html')
                );
                copyHtml(
                    path.resolve(__dirname, '..', '..', 'admin', 'admin-foto.html'),
                    path.resolve(outDir, 'admin-foto.html')
                );
                copyHtml(
                    path.resolve(__dirname, '..', '..', 'admin', 'admin-tel.html'),
                    path.resolve(outDir, 'admin-tel.html')
                );

                console.log('copy static finished');
            })
        }
    }
}

module.exports = copyStaticPlugin;