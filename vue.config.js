module.exports = {
    chainWebpack: config => {
        config.plugins.delete('prefetch');
        config.plugins.delete('preload');
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'freek fabricius — lost my controller';
                args[0].meta = {
                    description: 'Album cover animation for EP of Freek Fabricius.'
                };
                return args;
            });
    }
};