// next.config.js
const path = require('path');

module.exports = {
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@docs': path.resolve(__dirname, 'app/_components/docs'),
            '@components': path.resolve(__dirname, 'app/_components/hds'),
            '@layout': path.resolve(__dirname, 'app/_components/layout'),
            '@styles': path.resolve(__dirname, 'app/_styles'),
            '@themes': path.resolve(__dirname, 'app/_themes'),
            '@types': path.resolve(__dirname, 'app/_types'),
            '@utils': path.resolve(__dirname, 'app/_utils'),
        };
        return config;
    }
};
