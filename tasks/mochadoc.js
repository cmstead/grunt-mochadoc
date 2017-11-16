'use strict';

const mochadocRunner = require('mochadoc-runner');

function registerTasks(grunt) {
    grunt.registerMultiTask('mochadoc', 'Run mochadoc against your test files', function () {
        const done = this.async();

        mochadocRunner(this.data, function (error, success) {
            if(error) {
                console.log('An error occurred: ' + error.toString());
            } else {
                console.log('Completing mochadoc task.');
            }

            done();
        });
    });
}

module.exports = registerTasks;