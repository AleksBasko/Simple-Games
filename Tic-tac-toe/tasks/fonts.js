'use strict';

const gulp = require('gulp');

module.exports = function(options) {

    return function () {
        return gulp.src(options.src)
        // .pipe($.cached('fonts:dev'))
        .pipe(gulp.dest(options.dist));
    };
};
