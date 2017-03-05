/*global module, require */
(function () {
    'use strict';

    var markdown = require('nunjucks-markdown'),
        marked = require('marked');

    module.exports = {
        main: {
            expand: true,
            cwd: '<%= sourceWorkingDirectory %>',
            src: ['*.html', '!boilerplate.html'],
            dest: '<%= destinationWorkingDirectory %>/',
            data: '<%= sourceWorkingDirectory %>/data/*.json',
            options: {
                modifyEnv: function (env) {
                    // Enable markdown rendering
                    markdown.register(env, marked);

                    return env;
                }
            }
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
