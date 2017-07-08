'use strict';

const $ = require('gulp-load-plugins')();
const gulp = require('gulp');

module.exports = function(options) {

    return function () {
        return gulp.src(options.src)
            // .pipe($.cached('pug:dev'))
            .pipe($.pug( { pretty:true }))
            .pipe(gulp.dest(options.dist));
    };
};
