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
      development: {
        options: {
          files: ['test/**/*.spec.js']
        }
      }
    },

    jshint: {
      gruntfile: ['Gruntfile.js'],
      source: ['source/www/modules/**/*.js']
    }

  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('test', ['karma:development']);
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('default', [
    'lint:gruntfile',
    'test',
    'lint:source'
  ]);

};
