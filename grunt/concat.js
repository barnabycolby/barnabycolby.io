/*global module */
(function () {
    'use strict';

    module.exports = {

        options: {
            stripBanners: true
        },
        main: {
            src: '<%= sourceWorkingDirectory %>/modules/**/*.js',
            dest: '<%= destinationWorkingDirectory %>/js/modules.js'
        }

    };
}());
