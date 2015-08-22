/*global module */
(function () {
    'use strict';

    module.exports = {

        main: {
            options: {
                sourceMap: true,
                sourceMapIn: function (sourceFilePath) {
                    return (sourceFilePath + '.map');
                }
            },
            src: '<%= sourceWorkingDirectory %>/modules/modules.js',
            dest: '<%= destinationWorkingDirectory %>/js/modules.min.js'
        }

    };

}());
