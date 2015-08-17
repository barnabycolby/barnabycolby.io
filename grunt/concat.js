/*global module */
(function () {
    'use strict';

    module.exports = {

        options: {
            stripBanners: true
        },
        source: {
            src: ['source/www/modules/**/*.js'],
            dest: 'production/www/js/modules.js'
        }

    };
}());
