/*global module */
(function () {
    'use strict';

    module.exports = function (grunt) {

        var updateIfChanged = function (name) {
            return function (result) {
                var dest = grunt.config.get('destinationWorkingDirectory'),
                    newFilePath = dest + "/" + name + ".new.html",
                    currentFilePath = dest + "/" + name + ".html";
                if (result) {
                    grunt.file.delete(newFilePath);
                } else {
                    grunt.file.delete(currentFilePath);

                    // Rename using copy and delete
                    grunt.file.copy(newFilePath, currentFilePath);
                    grunt.file.delete(newFilePath);
                }
            };
        };

        return {

            options: {
                ignoreSelectors: '#lastUpdated'
            },
            index: {
                expand: true,
                cwd: '<%= destinationWorkingDirectory %>',
                src: ['index.html', 'index.new.html'],
                result: updateIfChanged('index')
            },
            projects: {
                expand: true,
                cwd: '<%= destinationWorkingDirectory %>',
                src: ['projects.html', 'projects.new.html'],
                result: updateIfChanged('projects')
            }
        };
    };
}());
