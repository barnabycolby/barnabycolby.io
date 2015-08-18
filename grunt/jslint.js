/*global module */
(function () {
    'use strict';

    module.exports = {

        grunt: {
            src: ['Gruntfile.js', 'grunt/**/*.js']
        },
        source: {
            src: ['<%= sourceWorkingDirectory %>/modules/**/*.js']
        },
        test: {
            src: ['test/**/*.spec.js']
        }

    };
}());
