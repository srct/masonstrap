// Gulp Imports
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const uglifycss = require('gulp-uglifycss');
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');
const merge = require('merge-stream');
const connect = require('gulp-connect');
const concat = require('gulp-concat')
const minify = require('gulp-minify');

// Reusable directories
const src = './src'
const dest = './build'

// Move html to build/html
gulp.task('html', () => gulp.src(src + '/html/*.html')
  .pipe(connect.reload())
  .pipe(gulp.dest(dest))
);

// Optimize images and move them to build/img
gulp.task('img', () => gulp.src(src + '/img/*')
  .pipe(connect.reload())
  .pipe(imagemin())
  .pipe(gulp.dest(dest + '/img/'))
);

// Build masonstrap.min.js
gulp.task('js', () => gulp.src(['./node_modules/jquery/dist/jquery.min.js', './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', src + '/js/*.js'])
  .pipe(concat('masonstrap.js'))
  .pipe(minify({ext: ".min.js"}))
  .pipe(gulp.dest(dest + '/js/'))
);

// Compile, autoprefix, minify scss with sourcemaps
gulp.task('sass', () => gulp.src(src + '/scss/*.scss')
  .pipe(connect.reload())
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss([autoprefixer()]))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(dest + '/css/'))
  .pipe(uglifycss())
  .pipe(rename({extname: ".min.css"}))
  .pipe(gulp.dest(dest + '/css/'))
);

// Run task whenever associated files change
gulp.task('watch', () => {
  gulp.watch(src + '/scss/*.scss', ['sass'])
  gulp.watch(src + '/html/*.html', ['html'])
  gulp.watch(src + '/img/*', ['img'])
  gulp.watch(src + '/js/*.js', ['js'])
});

// LiveReload dev server
gulp.task('http', () => {
  connect.server({
    root: './build/',
    port: '8000',
    livereload: true
  });
});

// Run all tasks
gulp.task('build', ['sass', 'html', 'img', 'js']);

// By default, run all tasks and then rebuild on changes
gulp.task('default', ['http', 'build', 'watch']);