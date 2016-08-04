/*global module */
(function () {
    'use strict';

    module.exports = {

        options: {
            tag: 'hash',
            hashLength: 6,
            versionsMapFile: '<%= destinationWorkingDirectory %>/assetMap.json',
            versionsMapTrimPath: 'dist/www'
        },
        main: {
            files: {
                cwd: '<%= destinationWorkingDirectory %>',
                "<%= destinationWorkingDirectory %>/favicon.ico": ["<%= sourceWorkingDirectory %>/favicon.ico"]
            }
        }

    };
}());
