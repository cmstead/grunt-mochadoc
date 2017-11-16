'use strict';

const mochadocRunner = require('mochadoc-runner');

function registerTasks(grunt) {
    grunt.registerMultiTask('mochadoc', 'Run mochadoc against your test files', function () {
        const done = this.async();
        mochadocRunner(this.data, done);
    });
}

module.exports = registerTasks;