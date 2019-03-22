require('dotenv').config();
const mix = require('laravel-mix');

mix.react('src/react/app.jsx', 'public/dist/')
    .sass('src/scss/app.scss', 'public/dist/')
    .setPublicPath('public')
    .sourceMaps()
    .browserSync({
        open: false,
        proxy: `${process.env.APP_URL}:${process.env.APP_PORT_EXTERNAL}`,
        files: [
            'public/dist/*.css',
            'public/dist/*.js',
        ],
    });
