/*global module, require */
(function () {
    'use strict';

    module.exports = function (grunt) {
        require('time-grunt')(grunt);
        require('load-grunt-config')(grunt, {
            // Variables that we can access within the grunt task config files
            data: {
                pkg: grunt.file.readJSON('package.json'),
                sourceWorkingDirectory: 'src/www',
                destinationWorkingDirectory: 'dist/www'
            }
        });
    };
}());
