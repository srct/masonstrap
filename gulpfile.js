/*
  "scripts": {
    "sass-compile": "node-sass --output-style expanded --source-map true --source-map-contents true --precision 6 ./masonstrap/masonstrap.scss ./public/assets/css/masonstrap.css",
    "sass-prefix": "npx postcss ./public/assets/css/masonstrap.css --use autoprefixer -d ./public/assets/css/",
    "sass-minify": "cleancss --source-map --source-map-inline-sources -o ./public/assets/css/masonstrap.min.css ./public/assets/css/masonstrap.css",
    "copy-fonts": "cp -r ./node_modules/font-awesome/fonts/ ./public/assets/",
    "copy-js": "cp ./node_modules/jquery/dist/jquery.min.js ./public/assets/js/jquery.min.js && cp ./node_modules/jquery/dist/jquery.min.map ./public/assets/js/jquery.min.map && cp ./node_modules/bootstrap/dist/js/bootstrap.min.js ./public/assets/js/bootstrap.min.js && cp ./node_modules/popper.js/dist/umd/popper.min.js ./public/assets/js/popper.min.js && cp ./node_modules/popper.js/dist/umd/popper.min.js.map ./public/assets/js/popper.min.js.map",
    "build-masonstrap": "npm-run-all copy-js copy-fonts sass-compile sass-prefix sass-minify",
    "sass-watch": "onchange './masonstrap/*.scss' -- npm run build-masonstrap",
    "http": "http-server -r -p 8000",
    "start": "npm-run-all copy-js copy-fonts sass-watch",
    "dev": "npm-run-all --parallel build-masonstrap start http"
  },
*/
// Gulp Imports
var gulp = require('gulp');

gulp.task('default', () => {
  // place code for your default task here
});
