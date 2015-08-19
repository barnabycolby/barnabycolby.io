/*global module */
(function () {
    'use strict';

    module.exports = {

        projects: {
            files: {
                '<%= sourceWorkingDirectory %>/schemas/projects.json': '<%= sourceWorkingDirectory %>/data/projects.json'
            }
        },
        navigation: {
            files: {
                '<%= sourceWorkingDirectory %>/schemas/navigation.json': '<%= sourceWorkingDirectory %>/data/navigation.json'
            }
        }

    };
}());
