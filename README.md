# Grunt-Mochadoc #

A Grunt task for running Mochadoc against your existing test codebase.

Find me online:
- [@cm_stead](https://twitter.com/cm_stead)
- [ChrisStead.com](http://www.chrisstead.com)

## Setup ##

First install Grunt-Mochadoc globally from NPM:

`npm install grunt-mochadoc --save-dev`

Then add your runner configuration to your gruntfile:

```
module.exports = function(grunt) {
    grunt.initConfig({
        tests: {
            config: './.mochadocrc'
        }
    });

    grunt.registerNpmTask('grunt-mochadoc');
}
```

That's it!

## Configuring Mochadoc ##

The best way to configure Mochadoc is to follow the instructions on the [Mochadoc NPM Page](https://www.npmjs.com/package/mochadoc).

A typical `.mochadocrc` file will look like the following:

```
{
    "projectName": "My Groovy Project",
    "files": "./test/**/*.test.js",
    "dest": "./docs/api"
}
```

## Running Grunt-Mochadoc ##

Grunt-Mochadoc runs much like any other Grunt task. Running `grunt mochadoc` will run all configured mochadoc tasks.  This will generate all documents as each configuration defines.  Since Grunt-Mochadoc is a [multitask](https://gruntjs.com/creating-tasks#multi-tasks) it can also be called with each named configuration: `grunt mochadoc:mySweetTests`.

## Commit History ##

### v1.0.5 ###

- First Stable Release