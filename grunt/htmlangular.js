/*global module */
(function () {
    'use strict';

    module.exports = {

        options: {
            relaxerror: ['Comments seen before doctype. Internet Explorer will go into the quirks mode.'],
            customtags: ['header', 'footer', 'projects', 'contactbuttons'],
            reportpath: null,
            reportCheckstylePath: null,
            charset: false
        },
        distribution: {
            expand: true,
            cwd: '<%= destinationWorkingDirectory %>',
            src: ['*.html']
        }

    };
}());
