/*global module, require */
/*jslint regexp: true */
(function () {
    'use strict';

    module.exports = {

        main: {
            options: {
                htmlroot: '<%= destinationWorkingDirectory %>',
                ignoreSheets: [
                    // If we didn't ignore index.css and projects.css, the styles would be included in stylesheet.css too and therefore twice
                    // By ignoring it we lose the benefit of removing rules from index.css and projects.css that we don't use, but as this is
                    // a custom stylesheet there is unlikely to be many, if any, unused rules
                    'https://test.barnabycolby.io/css/index.css',
                    'https://test.barnabycolby.io/css/projects.css'
                ]
            },
            // nonull must be included to prevent Grunt from removing the URL sources because it cannot find them locally
            nonull: true,
            src: [
                'https://test.barnabycolby.io/ctf_toolbox.new.html',
                'https://test.barnabycolby.io/index.new.html',
                'https://test.barnabycolby.io/projects.new.html'
            ],
            dest: '<%= destinationWorkingDirectory %>/css/stylesheet.css'
        }

    };
}());
