/*global module */
(function () {
    'use strict';

    module.exports = {

        grunt: {
            src: ['Gruntfile.js', 'grunt/**/*.js']
        },
        main: {
            src: ['src/www/js/**/*.js']
        },
        test: {
            src: ['test/**/*.js']
        }

    };
}());
