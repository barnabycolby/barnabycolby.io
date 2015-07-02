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
        singleRun: true
      },
      source: {
        options: {
          files: [
            'bower_components/angular/angular.min.js',
            'source/**/*.js',
            'test/**/*.spec.js'
          ]
        }
      },
      production: {
        options: {
          files: [
            'bower_components/angular/angular.min.js',
            'production/**/*.js',
            'test/**/*.spec.js'
          ]
        }
      }
    },

    jshint: {
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
        dest: 'production/',
      }
    },

    uglify: {
      main: {
        expand: true,
        cwd: 'source/',
        src: '**/*.js',
        dest: 'production/'
      }
    }

  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', [
    'jshint:gruntfile',
    'jshint:test',
    'karma:source',
    'jshint:source',
    'clean',
    'copy',
    'uglify',
    'karma:production'
  ]);

};
