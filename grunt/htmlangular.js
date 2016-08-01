/*global module */
(function () {
    'use strict';

    module.exports = {

        options: {
            reportpath: null,
            reportCheckstylePath: null,
            charset: false,
            relaxerror: ['Empty heading.']
        },
        distribution: {
            expand: true,
            cwd: '<%= destinationWorkingDirectory %>',
            src: ['*.html']
        }

    };
}());
