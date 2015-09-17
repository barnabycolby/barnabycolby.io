/*global module, require */
(function () {
    'use strict';

    module.exports = {

        main: {
            options: {
                htmlroot: '<%= destinationWorkingDirectory %>',
                ignoreSheets: ['https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css']
            },
            files: {
                '<%= destinationWorkingDirectory %>/css/stylesheet.css': [
                    // test.barnabycolby.io must be used instead of file paths. Otherwise havoc is caused by the root-relative urls in the angular modules no longer point to the right place as the root changes when evaluated by uncss, it is now the root of the filesystem
                    'https://test.barnabycolby.io',
                    'https://test.barnabycolby.io/projects.html'
                ]
            }
        }

    };
}());
