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
var sass = require('gulp-ruby-sass');
var config = require('./config');
var imageop = require('gulp-image-optimization');

gulp.task('images', function(cb) {
  gulp.src('./src/assets/images/**/*')
    .pipe( imageop({
      optimizationLevel: 5,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('./public/images/'));
});


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


gulp.task('browserify', function () {
  return browserify({entries: './src/client/app.js', extensions: ['.js'], debug: true})
    .transform(babelify)
    .bundle()
    .pipe(source('app.min.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    // Add transformation tasks to the pipeline here.
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('lint', function (cb) {
  return gulp.src(['./src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('sass', function () {
  return sass('./src/assets/sass/style.sass', { sourcemap: true,  style: 'compressed' })
    .on('error', sass.logError)

    // For file sourcemaps
    .pipe(sourcemaps.write('./', {
      includeContent: false,
      sourceRoot: 'source'
    }))

    .pipe(gulp.dest('./public/css/'));
});

gulp.task('fonts', function() {
  return gulp.src('./src/assets/fonts/**/*').pipe(gulp.dest('./public/fonts/'));
});

gulp.task('watch', function() {
  gulp.watch(['./src/**/*.js'], ['lint', 'browserify', browserSync.reload]);
  gulp.watch(['./src/assets/sass/**/*.sass'], ['sass', browserSync.reload]);
});

gulp.task('serve', ['browser-sync', 'watch']);

gulp.task('default', ['browserify', 'nodemon', 'sass', 'fonts', 'images', 'watch']);