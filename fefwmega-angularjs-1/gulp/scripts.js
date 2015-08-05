'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');


var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('scripts', function () {
  gulp.src('../../resources/public/js/**/*.js')
    .pipe(gulp.dest(path.join(conf.paths.src,'/js/')));
  return gulp.src([path.join(conf.paths.src,'/app/**/*.js')])
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe($.size());
});
