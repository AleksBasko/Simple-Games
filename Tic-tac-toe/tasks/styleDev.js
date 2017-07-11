'use strict';

const $ = require('gulp-load-plugins')();
const gulp = require('gulp');
const autoprefixer = require('autoprefixer');

module.exports = function(options) {
    return function () {
        return gulp.src(options.src)
            .pipe($.plumber(function(error) {
                $.util.log($.util.colors.red(error.message));
                $.util.beep();
                this.emit('end');
            }))
            .pipe($.sass({
                includePaths: ['src/style/'],
                sourceMap: true,
                errLogToConsole: true
            }))
            .pipe($.postcss([ autoprefixer({ browsers: ['last 5 versions'] }) ]))
            .pipe(gulp.dest(options.dist));
    };
};
