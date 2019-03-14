'use strict';

var gulp = require('gulp');
var rtmcoreTasks = require('rtmcore-build');

rtmcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
