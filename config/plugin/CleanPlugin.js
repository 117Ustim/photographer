const fs = require('fs/promises');

module.exports = {
    name: 'CleanPlugin',
    setup(build) {
        build.onStart(async () => {
            try {
                await fs.rm(build.initialOptions.outdir, { recursive: true });
            } catch (err) { console.error(err) }
        });
    }
}
