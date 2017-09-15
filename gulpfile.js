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
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var uglifycss = require('gulp-uglifycss');
var rename = require("gulp-rename");

gulp.task('sass', function () {
 return gulp.src('./masonstrap/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss([autoprefixer()]))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./public/assets/css/'))
  .pipe(uglifycss())
  .pipe(rename({extname: ".min.css"}))
  .pipe(gulp.dest('./public/assets/css/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./masonstrap/**/*.scss', ['sass']);
});
