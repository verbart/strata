const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const stylus = require('gulp-stylus');
const pug = require('gulp-pug');
const resolver = require('stylus').resolver;
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const gulpIf = require('gulp-if');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');

const isDevelopment = process.env.NODE_ENV !== 'production';

gulp.task('views', function buildHTML() {
  return gulp.src('views/**/!(_)*.pug')
    .pipe(plumber({
      errorHandler: notify.onError(function (err) {
        return {
          message: err.message
        };
      })
    }))
    .pipe(pug({
      pretty: isDevelopment
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('styles', function () {
  return gulp.src('./styles/main.styl')
    .pipe(plumber({
      errorHandler: notify.onError(function (err) {
        return {
          message: err.message
        };
      })
    }))
    .pipe(gulpIf(isDevelopment, sourcemaps.init()))
      .pipe(stylus({
        'include-css': true,
        define: {
          url: resolver()
        }
      }))
    .pipe(gulpIf(isDevelopment, sourcemaps.write()))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
  gulp.watch('./views/**/*.pug', ['views']);
  gulp.watch('./styles/**/*.styl', ['styles']);
});

gulp.task('serve', function () {
  browserSync.init({
    server: './',
    port: 8080
  });

  browserSync.watch('./*.html').on('change', browserSync.reload);
  browserSync.watch('./style.css').on('change', browserSync.reload);
});

gulp.task('build', [
  'views',
  'styles'
]);

gulp.task('default', [
  'build',
  'watch',
  'serve'
]);
