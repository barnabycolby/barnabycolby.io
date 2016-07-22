/*global module, require */
(function () {
    'use strict';

    module.exports = {

        main: {
            options: {
                htmlroot: '<%= destinationWorkingDirectory %>',
                ignoreSheets: ['https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css']
            },
            // nonull must be included to prevent Grunt from removing the URL sources because it cannot find them locally
            nonull: true,
            src: [ 'https://test.barnabycolby.io', 'https://test.barnabycolby.io/projects.html' ],
            dest: '<%= destinationWorkingDirectory %>/css/stylesheet.css'
        }

    };
}());
