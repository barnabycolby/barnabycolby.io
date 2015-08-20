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
                    '<%= sourceWorkingDirectory %>/snippets/**/*.html': ['ng-html2js']
                },
                files: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/angular/angular.min.js',
                    'bower_components/angular-mocks/angular-mocks.js',
                    '<%= sourceWorkingDirectory %>/modules/**/*.js',
                    '<%= sourceWorkingDirectory %>/snippets/**/*.html',
                    'test/**/*.spec.js'
                ],
                ngHtml2JsPreprocessor: {
                    stripPrefix: '<%= sourceWorkingDirectory %>'
                }
            }
        },
        production: {
            options: {
                preprocessors: {
                    '<%= destinationWorkingDirectory %>/snippets/**/*.html': ['ng-html2js']
                },
                files: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/angular/angular.min.js',
                    'bower_components/angular-mocks/angular-mocks.js',
                    '<%= destinationWorkingDirectory %>/js/modules.min.js',
                    '<%= destinationWorkingDirectory %>/snippets/**/*.html',
                    'test/**/*.spec.js'
                ],
                ngHtml2JsPreprocessor: {
                    stripPrefix: '<%= destinationWorkingDirectory %>'
                }
            }
        }

    };
}());