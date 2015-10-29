var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var babelify = require('babelify');
var eslint = require('gulp-eslint');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var config = require('./config');

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync({
    files: ['public/**/*.*'],
    proxy: "localhost:" + config.APP_PORT,  // local node app address
    port: 5000,  // use *different* port than above
    notify: true,
    browser: "google chrome",
  });
});

gulp.task('nodemon', function(cb) {
  var called = false;
  return nodemon({
    script: './index.js',
    ignore: [
      'gulpfile.js',
      'node_modules/',
      'public/,'
    ]
  })
    .on('start', function () {
      if (!called) {
        called = true;
        cb();
      }
    })
    .on('restart', function () {
      setTimeout(function () {
        browserSync.reload({ stream: false });
      }, 200);
    });
});

// TASK: HANDLE BROWSER REFRESH CORRECTLY

gulp.task('browserify', function() {
  return browserify('./src/client/app.js')
    .transform(babelify.configure({optional: ["runtime"]}))
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.ROOT_FOLDER + '/public/js/'));
});

gulp.task('lint', function (cb) {
  return gulp.src(['./src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('watch', function() {
  gulp.watch(['./src/**/*.js'], ['lint', 'browserify', browserSync.reload]);
});

gulp.task('serve', ['browser-sync', 'watch']);

gulp.task('default', ['browserify', 'nodemon', 'watch']);