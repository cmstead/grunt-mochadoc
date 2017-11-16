'use strict';

const mochadocRunner = require('mochadoc-runner');

function registerTasks(grunt) {
    grunt.registerMultiTask('mochadoc', 'Run mochadoc against your test files', function () {
        const done = this.async();

        mochadocRunner.callMochadoc(this.data, function (error, success) {
            if(error) {
                grunt.log('An error occurred: ' + error.toString());
            } else {
                grunt.log('Completing mochadoc task.');
            }

            done();
        });
    });
}

module.exports = registerTasks;