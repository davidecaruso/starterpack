module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        /// Banners
        banners: {
            dev: "<%= pkg.name %> <%= grunt.template.today('yyyy-mm-dd HH:MM:ss') %>",
            dist: "/**\n" +
            " * <%= pkg.name %>\n" +
            " * \n" +
            " * Copyright (c) <%= grunt.template.today('yyyy') %>, <%= pkg.author %>\n" +
            " * Licensed under <%= pkg.license %>\n" +
            " * \n" +
            " * Released on <%= grunt.template.today('mmmm') %> <%= grunt.template.today('dS') %>, <%= grunt.template.today('yyyy') %>\n" +
            " */"
        },

        /// Minify javascript files with UglifyJS
        uglify: {
            dev: {
                options: {
                    banner: "console.log('<%= banners.dev %>');",
                    mangle: false,
                    beautify: true
                },
                files: "<%= uglify.files %>"
            },
            dist: {
                options: {
                    banner: "<%= banners.dist %>",
                    mangle: true,
                    beautify: false
                },
                files: "<%= uglify.files %>"
            },
            files: {
                "js/<%= pkg.name %>.min.js": [
                    // "bower_components/example/dist/example.js",
                    "src/js/**/*.js"
                ]
            }
        },

        /// Validate files with JSHint
        jshint: {
            all: ["Gruntfile.js", "src/js/**/*.js"]
        },

        /// Install and update npm & bower dependencies.
        auto_install: {
            local: {}
        },

        /// Compile Sass to CSS using Compass
        compass: {
            dev: {
                options: {
                    banner: "/* <%= banners.dev %> */",
                    specify: "src/sass/style.scss",
                    sassDir: "src/sass",
                    cssDir: "css",
                    imagesDir: "images",
                    javascriptsDir: "js",
                    generatedImagesDir: "images/sprites",
                    relativeAssets: true,
                    require: ["compass/import-once/activate", "susy"], /// $ gem install susy
                    environment: "development",
                    outputStyle: "expanded",
                    noLineComments: false,
                    force: false
                }
            },
            dist: {
                options: {
                    banner: "<%= banners.dist %>",
                    specify: "src/sass/style.scss",
                    sassDir: "src/sass",
                    cssDir: "css",
                    imagesDir: "images",
                    javascriptsDir: "js",
                    generatedImagesDir: "images/sprites",
                    relativeAssets: true,
                    require: ["compass/import-once/activate", "susy"], /// $ gem install susy
                    environment: "production",
                    outputStyle: "compressed",
                    noLineComments: true,
                    force: true
                }
            }
        },

        /// Clean files and folders
        clean: ["*.DS_Store", "**/*.DS_Store"],

        /// Run predefined tasks whenever watched file patterns are added, changed or deleted
        watch: {
            default: {
                files: ["Gruntfile.js"],
                tasks: ["default"]
            },
            js: {
                files: "src/js/**/*.js",
                tasks: ["jshint", "uglify:dev"]
            },
            sass: {
                files: ["src/sass/**/*.sass", "src/sass/**/*.scss"],
                tasks: ["compass:dev"]
            },
            autoinstall: {
                files: ["bower.json", "package.json"],
                tasks: ["auto_install"]
            },
            clean: {
                files: [".DS_Store", "**/.DS_Store"],
                tasks: ["clean"]
            }
        }

    });

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-compass");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks('grunt-auto-install');

    grunt.registerTask("default", ["auto_install", "uglify:dev", "compass:dev", "clean", "watch"]);
    grunt.registerTask("deploy", ["uglify:dist", "compass:dist"]);

};