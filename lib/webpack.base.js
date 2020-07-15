const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const glob = require('glob');
const path = require('path');

const projectRoot = process.cwd()
function setMAP() {
    const entry = {};
    const htmlWebpackPlugins = [];
    const entryFiles = glob.sync(path.join(projectRoot, 'src/*/index.js'));
    entryFiles.forEach((file) => {
        const entryFile = file;
        const match = entryFile.match(/src\/(.*)\/index\.js/);

        const pathName = match && match[1];
        if (pathName) {
            entry[pathName] = entryFile;
            htmlWebpackPlugins.push(new HtmlWebpackPlugin({
                template: path.join(projectRoot, `public/${pathName}.html`),
                filename: `${pathName}.html`,
                chunks: [pathName],
                inject: true,
                minify: {
                    html5: true,
                    minifyCss: true,
                    minifyJs: true,
                    collapseWhitespace: true,
                    preserverLineBreaks: false,
                    remoteComments: false
                }
            }));
        }
    });
    
    return {entry, htmlWebpackPlugins};
}
const { entry, htmlWebpackPlugins } = setMAP();

module.exports = {
    entry,
    output: {
        filename: 'js/[name]_[chunkhash:8].js',
        path: path.join(projectRoot, './dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            }, {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }, {
                test: /\.scss/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader', {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer]
                        }
                    }
                ]
            }, {
                test: /\.(png|jpe?g|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'img/[name]_[hash:8].[ext]'
                    }
                }
            }, {
                test: /\.(ttf|eot|svg|woff|woff2)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'fontSize/[name]_[hash:8].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({filename: 'css/[name]_[contenthash:8].css'}),
        new CleanWebpackPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        function doneErrorsPlugin() {
            this
                .hooks
                .done
                .tap('done', (stats) => {
                    if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') === -1) {
                        console.log('build', stats.compilation.errors); //eslint-disable-line
                        process.exit(stats.compilation);
                    }
                    // if(stats.errors && stats.errors.length && )
                });
        }
    ].concat(htmlWebpackPlugins)
};
