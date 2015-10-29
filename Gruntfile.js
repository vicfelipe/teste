module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      'build/teste.js': 'src/js/*.js'
    },

    less: {
      'build/estilo.less': ['src/css/*.css']
    },
    concat: {
    'build/teste.min.js': ['build/*.js'],
    },
    imagemin: {
       png: {
          options: {
             optimizationLevel: 1
          },
          files: [{
             expand: true,
             cwd: 'src/img/',
             src: ['**/*.png'],
             dest: 'build/img/'
          }]
       },
       jpg: {
          options: {
             progressive: true
          },
          files: [{
             expand: true,
             cwd: 'src/img/',
             src: ['**/*.jpg'],
             dest: 'build/img/'
          }]
       }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', ['uglify', 'less', 'concat', 'imagemin']);

};