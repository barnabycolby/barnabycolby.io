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
      all: ['Gruntfile.js', 'source/www/modules/**/*.js']
    }

  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('test', ['karma:development']);
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('default', [
    'test',
    'lint'
  ]);

};
