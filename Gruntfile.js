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

  });

  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('test', ['karma:development']);

}
