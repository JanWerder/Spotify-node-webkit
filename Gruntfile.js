module.exports = function(grunt) {

 grunt.initConfig({
    nodewebkit: {
      options: {
        build_dir: './build', // Where the build version of my node-webkit app is saved
        mac: true,
        win: true,
        linux32: true,
        linux64: true,
      },
      src: './public/**/*'
    },
  });

  grunt.loadNpmTasks('grunt-node-webkit-builder');
  grunt.registerTask('default', ['nodewebkit']);

};