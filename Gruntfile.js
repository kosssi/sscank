module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        lesslint: {
            src: ['src/**/*.less']
        },
        clean: {
            dist: ['css']
        },
        recess: {
            options: {
                compile: true
            },
            sscank: {
                src: ['src/less/sscank.less'],
                dest: 'dist/css/<%= pkg.name %>.css'
            }
        },
        jekyll: {
            doc: {}
        }
    });

    // Load the plugin
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-lesslint');
    grunt.loadNpmTasks('grunt-jekyll');

    // Default task(s).
    grunt.registerTask('default', ['clean', 'recess', 'jekyll']);
};
