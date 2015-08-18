/*global module */
(function () {
    'use strict';

    module.exports = {

        options: {
            stripBanners: true
        },
        source: {
            src: '<%= sourceWorkingDirectory %>/modules/**/*.js',
            dest: '<%= destinationWorkingDirectory %>/js/modules.js'
        }

    };
}());
