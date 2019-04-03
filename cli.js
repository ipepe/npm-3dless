#!/usr/bin/env node

var ARGV = process.argv;

console.log('I am CLI!');

process.global = {};
global.THREE = require("three.js");
global.window = global;
