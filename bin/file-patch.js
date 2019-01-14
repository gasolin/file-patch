#!/usr/bin/env node
'use strict'

const DiffMatchPatch = require('diff-match-patch');

const utils = require('./utils');

const argv = process.argv;

if (argv.length < 4) {
  console.log('-: require two files as arguments');
  console.log('usage: file-patch patch file\n');
  process.exit(1);
}

const patch_text = utils.readText(argv[2]);
const text1 = utils.readText(argv[3]);
const dmp = new DiffMatchPatch();
const patch = dmp.patch_fromText(patch_text)
const [patched_text, result] = dmp.patch_apply(patch, text1)

if (result[0]) { // save to file
  utils.writeText(utils.getPath(argv[3]), patched_text)
  console.log(`${utils.getPath(argv[3])} has been patched`)
} else {
  console.warn('patch fail', result)
}
