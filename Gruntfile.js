module.exports = function (grunt) {

    /// Switch between production (prod) and development (dev) environment. E.g. $ grunt --environment=prod
    var production = typeof grunt.option("prod") !== "undefined";

    /// Print the current environment
    grunt.log.writeln((production ? "Production" : "Development").rainbow.bold);

    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        /// Minify javascript files with UglifyJS
        uglify: {
            options: {
                banner: production ?
                        "/**\n" +
                        " * <%= pkg.description %>\n" +
                        " * @author <%= pkg.author %>\n" +
                        " * @date <%= grunt.template.today('yyyy-mm-dd HH:MM:ss') %>\n" +
                        " */\n"
                        :
                        "console.log('<%= pkg.name %> <%= grunt.template.today(\'yyyy-mm-dd HH:MM:ss\') %>');\n",
                mangle: production,
                beautify: !production
            },
            build: {
                src: [
                    "bower_components/example/example.js",
                    "src/js/**/*.js"
                ],
                dest: "js/<%= pkg.name %>.min.js"
            }
        },

        /// Validate files with JSHint
        jshint: {
            all: ["Gruntfile.js", "src/js/**/*.js"]
        },

        /// Compile Sass to CSS using Compass
        compass: {
            compile: {
                options: {
                    sassDir: "src/sass",
                    cssDir: "css",
                    imagesDir: "images",
                    javascriptsDir: "js",
                    generatedImagesDir: "images/sprites",
                    relativeAssets: true,
                    require: ["compass/import-once/activate", "susy"], /// $ gem install susy
                    environment: production ? "production" : "development",
                    outputStyle: production ? "compressed" : "expanded",
                    noLineComments: production,
                    force: production
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
                files: "<%= uglify.build.src %>",
                tasks: ["jshint", "uglify"]
            },
            sass: {
                files: ["src/sass/**/*.sass"],
                tasks: ["compass"]
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

    grunt.registerTask("default", ["uglify", "compass", "clean", "watch"]);

};