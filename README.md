Sscank
======

Sscank is a fork of [KNASS](https://github.com/raphaelgoetter/KNACSS).

I love the concept but i don't like how it's written...

Todo list :
 - ☑ Copy all KNACSS composent
 - ☑ Create composer.json
 - ☑ Build less to CSS
 - ☑ Create minify CSS
 - ☑ Fix CSS errors
 - ☑ Add validator for LESS files
 - ☑ Create bower.json
 - ☐ Refactoring of all LESS files
 - ☐ Create component.json
 - ☐ Add test for CSS files
 - ☐ Create documentation for website
 - ☐ Create documentation for dev


For developer
=============

For generate CSS
----------------

 * Install nvm : https://github.com/creationix/nvm
 * Install node : nvm install 0.10
 * Install dependencies : npm install
 * Generate CSS : node_modules/grunt-cli/bin/grunt

For check LESS
--------------

 * node_modules/grunt-cli/bin/grunt lesslint
 * node_modules/recess/bin/recess src/less/sscank.less --noUniversalSelectors false --noUnderscores false --noIDs false --noOverqualifying false
