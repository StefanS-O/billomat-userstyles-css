module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.initConfig({
    watch: {
        css:{
          files: ['less/**/*.less'],
          tasks: ['less']
        }
      },
      less: {
          options: {
              sourceMap: true
          },
          dist: {
              files: {
                  'build/billomat.userstyles.css': 'less/billomat.less'
              }
          }
      },


  });

  grunt.registerTask('default', ['watch']);
};
