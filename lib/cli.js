#!/usr/bin/env node
/* globals process */
/* eslint no-console: 0, prefer-template: 0, strict: 0 */
'use strict';
const program = require('commander');
const getPath = require('object-path-get');
const appInfo = require('../package.json');
const colorify = require('./colorify');
const lib = colorify.lib;

// version
program.version(appInfo.version, '-v, --version');

// help
program
  .command('help')
  .description('print help information (alias for using -h or --help)')
  .action(function() {
    program.help();
  });

// random
program
  .command('random')
  .description('get a random color')
  .option(
    '-f, --format <format>',
    'css format types: ' + colorify.getCssFormatTypes().join(', '),
    'hex'
  )
  .action(function() {
    const c = lib.onecolor([
      'RGB',
      Math.random(),
      Math.random(),
      Math.random(),
      parseFloat(Math.random().toFixed(2))
    ]);
    console.log(colorify.format(c, program.args[0].format));
  });

// stats
program
  .command('stats [color]')
  .description('get color stats about an input string')
  .option(
    '-p, --path <path>',
    'only show the specified path (i.e. schemes.tetradic.2)'
  )
  .action(function(color) {
    let results;
    let path;
    color = color || '#000000';
    path = program.args[1].path;
    results = lib.colorStats.parse(color);
    // get path
    if (typeof path === 'string') {
      results = getPath(results, path, undefined);
      if (results === undefined) {
        console.error('\n  error: path `' + path + '` not found');
        process.exit(1);
      }
    }
    // stringify
    if (typeof results === 'object') {
      results = JSON.stringify(results, null, '  ');
    }
    console.log(results);
  });

// parse arguments
program.parse(process.argv);
