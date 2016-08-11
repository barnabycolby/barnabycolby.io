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
            '<%= destinationWorkingDirectory %>/assetMap.json',
            '<%= destinationWorkingDirectory %>/favicon.ico',
            '<%= destinationWorkingDirectory %>/css/stylesheet.min.css',
            '<%= destinationWorkingDirectory %>/css/index.min.css',
            '<%= destinationWorkingDirectory %>/css/projects.min.css',
            '<%= destinationWorkingDirectory %>/js/projects.min.js'
        ],
        old_assets: [
            '<%= destinationWorkingDirectory %>/favicon.*.ico',
            '<%= destinationWorkingDirectory %>/css/stylesheet.min.*.css',
            '<%= destinationWorkingDirectory %>/css/index.min.*.css',
            '<%= destinationWorkingDirectory %>/css/projects.min.*.css',
            '<%= destinationWorkingDirectory %>/js/projects.min.*.js'
        ]

    };
}());
