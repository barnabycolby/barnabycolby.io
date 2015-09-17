/*global module */
(function () {
    'use strict';

    module.exports = {

        modulesjs: '<%= sourceWorkingDirectory %>/modules/modules.*',
        css: [
            '<%= destinationWorkingDirectory %>/css/stylesheet.css',
            '<%= destinationWorkingDirectory %>/css/custom.css'
        ],
        dist: '<%= destinationWorkingDirectory %>'

    };
}());
