module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        lesslint: {
            src: ['src/**/*.less']
        },
        clean: {
            dist: ['dist']
        },
        recess: {
            options: {
                compile: true
            },
            sscank: {
                src: ['src/less/sscank.less'],
                dest: 'dist/css/<%= pkg.name %>.css'
            },
            min: {
                options: {
                    compress: true
                },
                src: ['src/less/sscank.less'],
                dest: 'dist/css/<%= pkg.name %>.min.css'
            }
        }
    });

    // Load the plugin
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-lesslint');

    // Default task(s).
    grunt.registerTask('default', ['clean', 'recess']);
};
