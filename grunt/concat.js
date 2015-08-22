/*global module */
(function () {
    'use strict';

    module.exports = {

        main: {
            options: {
                stripBanners: true,
                sourceMap: true
            },
            src: '<%= sourceWorkingDirectory %>/modules/**/*.js',
            dest: '<%= destinationWorkingDirectory %>/js/modules.js'
        }

    };
}());
