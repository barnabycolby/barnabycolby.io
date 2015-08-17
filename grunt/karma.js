/*global module */
(function () {
    'use strict';

    module.exports = {

        options: {
            frameworks: ['jasmine'],
            exclues: ['**/*.swp'],
            reporters: ['progress'],
            port: 9876,
            colors: true,
            logLevel: 'INFO',
            autoWatch: false,
            browsers: ['PhantomJS'],
            singleRun: true,
            plugins: [
                'karma-jasmine',
                'karma-phantomjs-launcher',
                'karma-ng-html2js-preprocessor'
            ]
        },
        source: {
            options: {
                preprocessors: {
                    'source/www/snippets/**/*.html': ['ng-html2js']
                },
                files: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/angular/angular.min.js',
                    'bower_components/angular-mocks/angular-mocks.js',
                    'source/www/modules/**/*.js',
                    'source/www/snippets/**/*.html',
                    'test/**/*.spec.js'
                ],
                ngHtml2JsPreprocessor: {
                    stripPrefix: 'source/www'
                }
            }
        },
        production: {
            options: {
                preprocessors: {
                    'production/www/snippets/**/*.html': ['ng-html2js']
                },
                files: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/angular/angular.min.js',
                    'bower_components/angular-mocks/angular-mocks.js',
                    'production/www/js/modules.min.js',
                    'production/www/snippets/**/*.html',
                    'test/**/*.spec.js'
                ],
                ngHtml2JsPreprocessor: {
                    stripPrefix: 'production/www'
                }
            }
        }

    };
}());
