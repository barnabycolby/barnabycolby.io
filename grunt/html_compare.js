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
                    // If the result is undefined, then the current file does not exist, and therefore we do not need to delete it
                    if (result === false) {
                        grunt.file.delete(currentFilePath);
                    }

                    // Rename using copy and delete
                    grunt.file.copy(newFilePath, currentFilePath);
                    grunt.file.delete(newFilePath);
                }
            };
        };

        return {

            options: {
                ignoreSelectors: '#lastUpdated',
                ignoreMissingSrc: true
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
