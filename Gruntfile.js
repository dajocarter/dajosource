// Generated on 2015-11-13 using generator-jekyllrb 1.4.1
'use strict';

// Directory reference:
//   css: _css
//   sass: _scss
//   javascript: _js
//   images: img
//   fonts: _fonts

module.exports = function(grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin',
    buildcontrol: 'grunt-build-control'
  });

  grunt.initConfig({
    // Configurable paths
    yeoman: {
      app: 'app',
      dist: 'dist'
    },
    watch: {
      sass: {
        files: ['<%= yeoman.app %>/_scss/**/*.{scss,sass}'],
        tasks: ['sass:server', 'postcss:dist']
      },
      postcss: {
        files: ['<%= yeoman.app %>/css/**/*.css'],
        tasks: ['copy:stageCss', 'postcss:dist']
      },
      jekyll: {
        files: [
          '<%= yeoman.app %>/**/*.{html,yml,md,mkd,markdown}',
          '!<%= yeoman.app %>/_bower_components/**/*'
        ],
        tasks: ['jekyll:server']
      }
    },
    browserSync: {
      server: {
        bsFiles: {
          src: [
            '.jekyll/**/*.html',
            '.tmp/_css/*.css',
            '.tmp/_js/*.js',
            '<%= yeoman.app %>/_bower_components/**/*.js',
            '<%= yeoman.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
          ]
        },
        options: {
          server: {
            baseDir: [
              '.jekyll',
              '.tmp',
              '<%= yeoman.app %>'
            ]
          },
          watchTask: true
        }
      },
      dist: {
        options: {
          server: {
            baseDir: '<%= yeoman.dist %>'
          }
        }
      },
      test: {
        bsFiles: {
          src: [
            '.jekyll/**/*.html',
            '.tmp/_css/**/*.css',
            '{.tmp,<%= yeoman.app %>}/js/**/*.js',
            '{<%= yeoman.app %>}/_bower_components/**/*.js',
            '<%= yeoman.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
          ]
        },
        options: {
          server: {
            baseDir: [
              '.jekyll',
              '.tmp',
              '<%= yeoman.app %>'
            ]
          },
          watchTask: true
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.dist %>/*',
            // Running Jekyll also cleans the target directory.  Exclude any
            // non-standard `keep_files` here (e.g., the generated files
            // directory from Jekyll Picture Tag).
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: [
        '.tmp',
        '.jekyll'
      ]
    },
    sass: {
      dist: {
        options: {
          debugInfo: false,
          lineNumbers: false,
          loadPath: 'app/_bower_components'
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/_scss',
          src: '**/*.{scss,sass}',
          dest: '.tmp/_css',
          ext: '.css'
        }]
      },
      server: {
        options: {
          debugInfo: true,
          lineNumbers: true,
          loadPath: 'app/_bower_components'
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/_scss',
          src: '*.scss',
          dest: '.tmp/_css',
          ext: '.css'
        }]
      }
    },
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({
            browsers: ['last 2 versions']
          })
        ]
      },
      dist: {
        expand: true,
        cwd: '.tmp/_css',
        src: '*.css',
        dest: '.tmp/_css'
      }
    },
    jekyll: {
      options: {
        config: '_config.yml,_config.build.yml',
        src: '<%= yeoman.app %>'
      },
      dist: {
        options: {
          dest: '<%= yeoman.dist %>',
        }
      },
      server: {
        options: {
          config: '_config.yml',
          dest: '.jekyll'
        }
      },
      check: {
        options: {
          doctor: true
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.html',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    // Usemin adds files to concat
    concat: {
      options: {
        separator: ';',
        sourceMap: true
      },
      dist: {
        src: [
          '<%= yeoman.app %>/_bower_components/jquery/dist/jquery.js',
          '<%= yeoman.app %>/_bower_components/modernizr/modernizr.js',
          '<%= yeoman.app %>/_bower_components/magnific-popup/dist/jquery.magnific-popup.js',
          '<%= yeoman.app %>/_bower_components/waypoints/lib/jquery.waypoints.js',
          '<%= yeoman.app %>/_bower_components/flexslider/jquery.flexslider.js',
          '<%= yeoman.app %>/_bower_components/FitText.js/jquery.fittext.js',
          '<%= yeoman.app %>/_bower_components/MathJax/MathJax.js',
          '<%= yeoman.app %>/_js/plugins.js',
          '<%= yeoman.app %>/_js/main.js'
        ],
        dest: '<%= yeoman.app %>/_js/script.js'
      }
    },
    // Usemin adds files to uglify
    uglify: {
      options: {
        mangle: false,
        sourceMap: true,
        preserveComments: false
      },
      dist: {
        files: {
          '<%= yeoman.dist %>/js/main.min.js': '<%= yeoman.app %>/_js/script.js'
        }
      }
    },
    cssmin: {
      dist: {
        options: {
          check: 'gzip'
        },
        files: [{
          expand: true,
          cwd: '.tmp/_css',
          src: '*.css',
          dest: '<%= yeoman.dist %>/css',
          ext: '.css'
        }]
      }
    },
    imagemin: {
      dist: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.{jpg,jpeg,png}',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.svg',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    copy: {
      server: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/_bower_components/Ionicons/fonts',
          src: [
            '*.{eot,svg,ttf,woff}'
          ],
          dest: '<%= yeoman.app %>/fonts'
        }, {
          expand: true,
          cwd: '<%= yeoman.app %>/_bower_components/MathJax',
          src: [
            'extensions/MathMenu.js',
            'extensions/MathZoom.js'
          ],
          dest: '<%= yeoman.app %>'
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: [
            // Jekyll processes and moves HTML and text files.
            // Usemin moves CSS and javascript inside of Usemin blocks.
            // Copy moves asset files and directories.
            'img/*',
            // Like Jekyll, exclude files & folders prefixed with an underscore.
            //'!**/_*{,/**}',
            '!_css',
            '!_data',
            '!_drafts',
            '!_includes',
            '!_js',
            '!_layouts',
            '!_posts',
            '!_scss',
            // Explicitly add any files your site needs for distribution here.
            'favicon.ico',
            'apple-touch*.png'
          ],
          dest: '<%= yeoman.dist %>'
        }, {
          expand: true,
          cwd: '<%= yeoman.app %>/_bower_components/Ionicons/fonts',
          src: [
            '*.{eot,svg,ttf,woff}',
          ],
          dest: '<%= yeoman.dist %>/fonts'
        }, {
          expand: true,
          cwd: '<%= yeoman.app %>/_bower_components/MathJax',
          src: [
            'extensions/MathMenu.js',
            'extensions/MathZoom.js'
          ],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    buildcontrol: {
      dist: {
        options: {
          remote: 'git@github.com:dajocarter/dajocarter.github.io.git',
          branch: 'master',
          commit: true,
          push: true
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/js/**/*.js',
        'test/spec/**/*.js'
      ]
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          '<%= yeoman.app %>/css/**/*.css'
        ]
      }
    },
    // https://github.com/robwierzbowski/generator-jekyllrb/issues/106
    // scsslint: {
    //   // See https://www.npmjs.org/package/grunt-scss-lint for options.
    //   allFiles: [
    //     '<%= yeoman.app %>/_scss/**/*.scss'
    //   ]
    // },
    concurrent: {
      server: [
        'sass:server',
        'jekyll:server'
      ]
    }
  });

  // Define Tasks
  grunt.registerTask('serve', function(target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'browserSync:dist']);
    }

    grunt.task.run([
      'clean:server',
      'copy:server',
      'concurrent:server',
      'postcss:dist',
      'concat:dist',
      'browserSync:server',
      'watch'
    ]);
  });

  grunt.registerTask('server', function() {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  // No real tests yet. Add your own.
  grunt.registerTask('test', [
    //   'clean:server',
    //   'concurrent:test',
    //   'browserSync:test'
  ]);

  grunt.registerTask('check', [
    'clean:server',
    'jekyll:check',
    'sass:server',
    //'jshint:all',
    //'csslint:check'
    // 'scsslint'
  ]);

  grunt.registerTask('build', [
    'clean',
    // Jekyll cleans files from the target directory, so must run first
    'jekyll:dist',
    'sass:dist',
    'postcss:dist',
    'cssmin',
    'concat:dist',
    'uglify:dist',
    'copy:dist',
    'imagemin',
    'svgmin',
    'htmlmin'
  ]);

  grunt.registerTask('deploy', [
    'check',
    'test',
    'build',
    'buildcontrol'
  ]);

  grunt.registerTask('default', [
    'check',
    'test',
    'build'
  ]);
};