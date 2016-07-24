/*global module, require */
/*jslint regexp: true */
(function () {
    'use strict';

    module.exports = {

        main: {
            options: {
                htmlroot: '<%= destinationWorkingDirectory %>',
                ignoreSheets: [
                    // We don't uncss font-awesome as the symbols don't get displayed properly
                    'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css',
                    // If we didn't ignore index.css, the styles would be included in stylesheet.css too and therefore twice
                    // By ignoring it we lose the benefit of removing rules from index.css that we don't use, but as this is a custom stylesheet
                    // there is unlikely to be many, if any, unused rules
                    'https://test.barnabycolby.io/css/index.css'
                ]
            },
            // nonull must be included to prevent Grunt from removing the URL sources because it cannot find them locally
            nonull: true,
            src: [ 'https://test.barnabycolby.io', 'https://test.barnabycolby.io/projects.html' ],
            dest: '<%= destinationWorkingDirectory %>/css/stylesheet.css'
        }

    };
}());
