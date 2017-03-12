/*global module, require */
(function () {
    'use strict';

    var nginx_built_directory = '/home/web/test.barnabycolby.io/nginx/built',
        nginx_folder = 'nginx';

    module.exports = {

        nginx: {
            command: './nginx/build.sh ' + nginx_built_directory + ' ' + nginx_folder
        }

    };
}());
