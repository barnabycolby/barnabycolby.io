/*global module, require */
(function () {
    'use strict';

    module.exports = {

        options: {
            override: function (detail, include) {
                if (detail.task === 'less') {
                    var gruntNewerLess = require('grunt-newer-less');
                    gruntNewerLess.checkForNewerImports(detail.path, detail.time, include);
                } else {
                    include(false);
                }
            }
        }

    };
}());
