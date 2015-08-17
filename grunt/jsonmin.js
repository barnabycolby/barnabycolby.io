/*global module */
(function () {
    'use strict';

    module.exports = {

        source: {
            expand: true,
            cwd: 'source/',
            src: 'www/data/**/*.json',
            dest: 'production/'
        }

    };
}());
