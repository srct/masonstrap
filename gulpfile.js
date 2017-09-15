/*
  "scripts": {
    "copy-fonts": "cp -r ./node_modules/font-awesome/fonts/ ./public/assets/",
    "copy-js": "cp ./node_modules/jquery/dist/jquery.min.js ./public/assets/js/jquery.min.js && cp ./node_modules/jquery/dist/jquery.min.map ./public/assets/js/jquery.min.map && cp ./node_modules/bootstrap/dist/js/bootstrap.min.js ./public/assets/js/bootstrap.min.js && cp ./node_modules/popper.js/dist/umd/popper.min.js ./public/assets/js/popper.min.js && cp ./node_modules/popper.js/dist/umd/popper.min.js.map ./public/assets/js/popper.min.js.map",
    "http": "http-server -r -p 8000",
    "dev": "npm-run-all --parallel build-masonstrap start http"
  },
*/

// Gulp Imports
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const uglifycss = require('gulp-uglifycss');
const rename = require("gulp-rename");

// Reusable directories
const src = './src/'
const dest = './dist/'

// Compile, autoprefix, minify scss
gulp.task('sass', () => gulp.src(src + '/scss/*.scss')
.pipe(sourcemaps.init())
.pipe(sass().on('error', sass.logError))
.pipe(postcss([autoprefixer()]))
.pipe(sourcemaps.write())
.pipe(gulp.dest(dest + '/css/'))
.pipe(uglifycss())
.pipe(rename({extname: ".min.css"}))
.pipe(gulp.dest(dest + '/css/')));

gulp.task('watch', () => {
  // Run `sass` task whenever scss files change
  gulp.watch(src + '/scss/*.scss', ['sass'])
});

// Run all tasks
gulp.task('run', ['sass']);

gulp.task('default', ['run', 'watch'])