/*global module */
(function () {
    'use strict';

    module.exports = {

        css: [
            '<%= destinationWorkingDirectory %>/css/stylesheet.css',
            '<%= destinationWorkingDirectory %>/css/custom.css'
        ],
        dist: '<%= destinationWorkingDirectory %>'

    };
}());
