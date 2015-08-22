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
            // The destination file is generated in the same location
            // so that the source map filenames do not start with
            // ../../../src/www/... when displayed in the browser
            dest: '<%= sourceWorkingDirectory %>/modules/modules.js'
        }

    };
}());
