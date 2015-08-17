/*global module */
(function () {
    'use strict';

    module.exports = {

        main: {
            expand: true,
            cwd: 'source/www',
            src: ['favicon.ico', 'data/**'],
            dest: 'production/www'
        }

    };
}());
