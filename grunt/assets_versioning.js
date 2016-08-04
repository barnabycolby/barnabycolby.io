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
                "<%= destinationWorkingDirectory %>/favicon.ico": ["<%= sourceWorkingDirectory %>/favicon.ico"],
                "<%= destinationWorkingDirectory %>/css/stylesheet.min.css": ["<%= destinationWorkingDirectory %>/css/stylesheet.min.css"],
                "<%= destinationWorkingDirectory %>/css/index.min.css": ["<%= destinationWorkingDirectory %>/css/index.min.css"],
                "<%= destinationWorkingDirectory %>/css/projects.min.css": ["<%= destinationWorkingDirectory %>/css/projects.min.css"],
                "<%= destinationWorkingDirectory %>/js/projects.min.js": ["<%= destinationWorkingDirectory %>/js/projects.min.js"]
            }
        }

    };
}());
