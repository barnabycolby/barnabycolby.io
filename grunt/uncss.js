/*global module, require */
(function () {
    'use strict';

    module.exports = {

        main: {
            options: {
                htmlroot: '<%= destinationWorkingDirectory %>'
            },
            // nonull must be included to prevent Grunt from removing the URL sources because it cannot find them locally
            nonull: true,
            src: [ 'https://test.barnabycolby.io', 'https://test.barnabycolby.io/projects.html' ],
            dest: '<%= destinationWorkingDirectory %>/css/stylesheet.css'
        }

    };
}());
