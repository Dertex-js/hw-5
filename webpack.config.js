const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const buildPath = path.resolve(__dirname, "dist");
const srcPath = path.resolve(__dirname, "src");

const isProd = process.env.NODE_ENV === "production";

const getSettingsForStyles = (withModules = false) => {
    return [MiniCssExtractPlugin.loader, !withModules ? 'css-loader' : {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: !isProd ? '[path][name]__[local]' : '[hash:base64]'
            }
        }
    }, {
        loader: 'postcss-loader',
        options: {
            postcssOptions: {
                plugins: ['autoprefixer']
            }
        }
    }, 'sass-loader']
}

module.exports = {
    entry: path.join(srcPath, "index.js"),
    target: !isProd ? "web" : "browserslist",
    output: {
        path: buildPath,
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(srcPath, "index.html")
        }),
        !isProd && new ReactRefreshWebpackPlugin(),
        new MiniCssExtractPlugin(
            {
                filename: '[name]-[hash].css'
            }
        )
    ].filter(Boolean),
    module: {
        rules: [
            {
                test: /\.module\.s?css$/,
                use: getSettingsForStyles(true)
            },
            {
                test: /\.s?css$/,
                exclude: /\.module\.s?css$/,
                use: getSettingsForStyles()
            },
            {
                test: /\.jsx?$/,
                use: "babel-loader"
            }
        ]
    },
    devServer: {
        host: "127.0.0.1",
        port: 9000,
        hot: true,
    }
}