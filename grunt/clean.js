/*global module */
(function () {
    'use strict';

    module.exports = {

        css: [
            '<%= destinationWorkingDirectory %>/css/stylesheet.css',
            '<%= destinationWorkingDirectory %>/css/custom.css',
            '<%= destinationWorkingDirectory %>/css/index.css',
            '<%= destinationWorkingDirectory %>/css/projects.css'
        ],
        dist: '<%= destinationWorkingDirectory %>',
        unversioned_assets: [
            '<%= destinationWorkingDirectory %>/favicon.ico',
            '<%= destinationWorkingDirectory %>/assetMap.json'
        ]

    };
}());
