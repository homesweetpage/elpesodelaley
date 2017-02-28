'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');

var stylus = require('gulp-stylus');
var nib = require('nib');

var jshint = require('gulp-jshint');

var paths = {
  app: './app',
  stylus: '/css/stylus',
  css: '/css',
  js: '/js'
};

var plumberOpts = {
  errorHandler: notify.onError('Error: <%= error.message %>')
};

function runServer() {
  gulp.src(paths.app)
    .pipe(plumber(plumberOpts))
    .pipe(webserver({
      host: '0.0.0.0',
      port: '8080',
      livereload: true
    }));
}

function runStylus() {
  gulp.src(paths.app + paths.stylus + '/style.styl')
    .pipe(plumber(plumberOpts))
    .pipe(stylus({
      use: nib()
    }))
    .pipe(gulp.dest(paths.app + paths.css));
}

function jsHint() {
  return gulp.src([paths.app + paths.js + '/main.js', './gulpfile.js', paths.app + paths.js + '/animate.js', paths.app + paths.js + '/typewriter.js'])
    .pipe(plumber(plumberOpts))
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
}

function watchFiles() {
  gulp.watch([paths.app + paths.stylus + '/**/*.styl'], ['stylus']);
  gulp.watch([paths.app + paths.js + '/**/*.js', './gulpfile.js'], ['jshint']);
}

gulp.task('stylus', runStylus);

gulp.task('jshint', jsHint);

gulp.task('server', runServer);

gulp.task('start', ['stylus', 'jshint']);

gulp.task('watch', watchFiles);

gulp.task('default', ['server', 'start', 'watch']);
