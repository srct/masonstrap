module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-exec');
  
  // Project configuration.
  grunt.initConfig({
    // Define some variables and options 
    pkg: grunt.file.readJSON('package.json'),
    builddir: 'masonstrap/',
    buildtheme: '',
    banner: '/*!\n' +
            ' * <%= pkg.name %> v<%= pkg.version %>\n' +
            ' * Homepage: <%= pkg.homepage %>\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license %>\n' +
            ' * Based on Bootstrap 4\n' +
            '*/\n',
    clean: {
      build: {
        src: ['*/build.scss', '!assets/scss/build.scss']
      }
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: false
      },
      dist: {
        src: [],
        dest: ''
      }
    },
    watch: {
      files: ['*/_variables.scss', '*/_masonstrap.scss', 'index.html'],
      tasks: 'build',
      options: {
        livereload: true,
        nospawn: true
      }
    },
    exec: {
      postcss: {
        command: 'npm run postcss'
      }
    },
    connect: {
      base: {
        options: {
          port: 3000,
          livereload: true,
          open: true
        }
      },
      keepalive: {
        options: {
          port: 3000,
          livereload: true,
          keepalive: true,
          open: true
        }
      }
    }
  });

  // Default task (does nothing)
  grunt.registerTask('none', function() {});

  // 
  grunt.registerTask('build', 'build masonstrap from scss', function(compress) {
    compress = compress === undefined ? true : compress;

    let concatSrc = 'assets/scss/build.scss';
    let concatDest = 'masonstrap/build.scss';
    let scssSrc  = 'masonstrap/build.scss';
    let scssDest = '<%=builddir%>/masonstrap.css';
    let dist = {src: concatSrc, dest: concatDest};    
    
    let files = {}; files[scssDest] = scssSrc;

    // Set configs
    grunt.config('concat.dist', dist);
    grunt.config('sass.dist.files', files);
    grunt.config('sass.dist.options.style', 'expanded');
    grunt.config('sass.dist.options.sourcemap', 'none');
    grunt.config('sass.dist.options.precision', 8);
    grunt.config('sass.dist.options.unix-newlines', true);
    
    //
    grunt.task.run(['concat', 'sass:dist', 'exec:postcss', 'clean:build',
      compress ? 'compress:' + scssDest + ':' + '<%=builddir%>/masonstrap.min.css' : 'none']);
  });

  //
  grunt.registerTask('compress', 'compress a generic css with sass', function(fileSrc, fileDst) {
    var files = {}; files[fileDst] = fileSrc;
    grunt.log.writeln('compressing file ' + fileSrc);

    grunt.config('sass.dist.files', files);
    grunt.config('sass.dist.options.style', 'compressed');

    grunt.task.run(['sass:dist']);
  });

  grunt.event.on('watch', function(action, filepath) {
    grunt.config('buildtheme', 'masonstrap');
  });

  grunt.registerTask('postcss', 'exec:postcss');

  grunt.registerTask('server', 'connect:keepalive');

  grunt.registerTask('default', ['connect:base', 'watch']);
};
