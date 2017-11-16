'use strict';

const mochadoc = require('./tasks/mochadoc');

module.exports = function (grunt) {
    grunt.initConfig({
        mochadoc: {
            client: {}
        }
    });

    mochadoc(grunt);
}