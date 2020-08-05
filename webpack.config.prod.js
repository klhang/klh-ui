const base = require('./webpack.config');

module.exports = Object.assign({}, base, {
    mode: 'production',
    externals: {
        'react': {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'react'
        },
        'react-dom': {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'react'
        }
    }
});