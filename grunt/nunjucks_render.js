/*global module */
(function () {
    'use strict';

    module.exports = {
        main: {
            expand: true,
            cwd: '<%= sourceWorkingDirectory %>',
            src: ['*.html', '!boilerplate.html'],
            dest: '<%= destinationWorkingDirectory %>/',
            data: '<%= sourceWorkingDirectory %>/data/*.json'
        },
        assetVersioning: {
            expand: true,
            cwd: '<%= destinationWorkingDirectory %>',
            src: ['*.html', '!boilerplate.html'],
            dest: '<%= destinationWorkingDirectory %>/',
            options: {
                data: '<%= destinationWorkingDirectory %>/assetMap.json',
                processData: function (data) {
                    var newData = {}, property;
                    for (property in data) {
                        if (data.hasOwnProperty(property)) {
                            newData[data[property].originalPath] = data[property].versionedPath;
                        }
                    }
                    return { "assetPaths": newData };
                }
            }
        }
    };
}());
