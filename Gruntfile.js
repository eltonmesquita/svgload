module.exports = function(grunt) {

  grunt.initConfig({

    // The output directory
    dirs: {
      dist: 'dist'
    },
    
    // Bundle all the js modules into one universal file
    browserify: {
      dist: {
        files: {
          '<%= dirs.dist %>/svgLoad.js': ['svgLoad.js']
        },
        options: {
          browserifyOptions: {
            standalone: 'svgLoad'
          }
        }
      }
    },

    // Minify your javascripts
    uglify: {
      options: {
        mangle: true
      },
      target: {
        files: {
          '<%= dirs.dist %>/svgLoad.js': ['<%= dirs.dist %>/svgLoad.js']
        }
      }
    },
    
    connect: {
      client: {
        options: {
          port: 8000,
          hostname: '*',
          base: './',
          livereload: false,
          keepalive: true
        }
      }
    },

  });

  // Load grunt plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Register the tasks
  grunt.registerTask('default', ['browserify', 'uglify']);
  grunt.registerTask('serve', ['browserify', 'uglify', 'connect']);

}
