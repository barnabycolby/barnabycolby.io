/*global module, require */
(function () {
    'use strict';

    module.exports = function (grunt) {

        grunt.initConfig({

            karma: {
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
                            'production/www/modules/**/*.js',
                            'production/www/snippets/**/*.html',
                            'test/**/*.spec.js'
                        ],
                        ngHtml2JsPreprocessor: {
                            stripPrefix: 'production/www'
                        }
                    }
                }
            },

            jslint: {
                gruntfile: ['Gruntfile.js'],
                source: ['source/www/modules/**/*.js'],
                test: ['test/**/*.spec.js']
            },

            clean: ['production'],

            copy: {
                main: {
                    expand: true,
                    cwd: 'source',
                    src: ['**/*', '!**/*.js'],
                    dest: 'production/'
                }
            },

            uglify: {
                main: {
                    expand: true,
                    cwd: 'source/',
                    src: '**/*.js',
                    dest: 'production/'
                }
            },

            postcss: {
                options: {
                    map: {
                        inline: false,
                        annotation: 'production/www/css/maps'
                    },
                    processors: [
                        require('autoprefixer-core')({browsers: '> 5%'}),
                        require('cssnano')()
                    ]
                },
                production: {
                    src: 'production/www/css/*.css'
                }
            }

        });

        grunt.loadNpmTasks('grunt-karma');
        grunt.loadNpmTasks('grunt-jslint');
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-postcss');

        grunt.registerTask('default', [
            'jslint:gruntfile',
            'jslint:test',
            'karma:source',
            'jslint:source',
            'clean',
            'copy',
            'uglify',
            'postcss:production',
            'karma:production'
        ]);

        grunt.registerTask('movetoprod', [
            'clean',
            'copy',
            'uglify',
            'postcss:production'
        ]);

        grunt.registerTask('testsource', [
            'karma:source'
        ]);

        grunt.registerTask('testprod', [
            'movetoprod',
            'karma:production'
        ]);

        grunt.registerTask('test', [
            'testsource',
            'testprod'
        ]);

    };
}());
