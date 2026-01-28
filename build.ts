const { build } = require("esbuild")
const { resolve } = require("path")
const { existsSync } = require("fs")
const { copy } = require("esbuild-plugin-copy")
const { context } = require("esbuild")
const isProd = process.argv.indexOf('--mode=production') >= 0;

const dependencies = ['vscode-html-to-docx', 'highlight.js', 'pdf-lib', 'cheerio', 'katex', 'mustache', 'puppeteer-core']

function main() {
    const buildOptions = {
        entryPoints: ['./src/extension.ts'],
        bundle: true,
        outfile: "out/extension.js",
        external: ['vscode', ...dependencies],
        format: 'cjs',
        platform: 'node',
        metafile: true,
        minify: isProd,
        sourcemap: !isProd,
        logOverride: {
            'duplicate-object-key': "silent",
            'suspicious-boolean-not': "silent",
        },
        plugins: [
            // 复制生成pdf的静态文件
            copy({
                resolveFrom: 'out',
                assets: {
                    from: ['./template/**/*'],
                    to: ['./'],
                    keepStructure: true
                },
            }),
            copy({
                resolveFrom: 'out',
                assets: {
                    from: ['./node_modules/node-unrar-js/dist/js/unrar.wasm'],
                    to: ['./'],
                    keepStructure: true
                },
            }),
            {
                name: 'build notice',
                setup(build) {
                    build.onStart(() => {
                        console.log('build start')
                    })
                    build.onEnd(() => {
                        console.log('build success')
                    })
                }
            },
        ],
    }

    // Use context for watch mode, build for one-time build
    if (!isProd) {
        context(buildOptions).then(ctx => {
            ctx.watch()
        })
    } else {
        build(buildOptions)
    }
}

function createLib() {
    const points = dependencies.reduce((point, dependency) => {
        const main = require(`./node_modules/${dependency}/package.json`).main ?? "index.js";
        const mainAbsPath = resolve(`./node_modules/${dependency}`, main);
        if (existsSync(mainAbsPath)) {
            point[dependency] = mainAbsPath;
        }
        return point;
    }, {})
    build({
        entryPoints: points,
        bundle: true,
        outdir: "out/node_modules",
        format: 'cjs',
        platform: 'node',
        minify: true,
        treeShaking: true,
        metafile: true
    })
}

createLib();
main();