const path = require('path');
const esbuild = require('esbuild');

esbuild.build({
    entryPoints: ['src/index.js'],
    bundle: true,
    minify: true,
    target: 'es2020',
    outdir: 'public',
    loader: { '.js': 'jsx' },
    plugins: [
        {
            name: 'alias',
            setup(build) {
                build.onResolve({ filter: /^src/ }, args => {
                    return {
                        path: path.resolve(__dirname, '..', args.path)
                    }
                });
            }
        }
    ]
});
