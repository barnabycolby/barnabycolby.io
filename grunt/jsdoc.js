/*global module */
(function () {
    'use strict';

    module.exports = {

        main: {
            expand: true,
            src: ['<%= sourceWorkingDirectory %>/modules/**/*.js'],
            options: {
                destination: 'docs/',
                configure: 'node_modules/angular-jsdoc/common/conf.json',
                template: 'node_modules/angular-jsdoc/default',
                readme: 'README.md'
            }
        }

    };
}());
