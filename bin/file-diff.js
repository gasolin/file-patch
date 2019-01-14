#!/usr/bin/env node
'use strict'

const DiffMatchPatch = require('diff-match-patch');

const utils = require('./utils');

const argv = process.argv;

if (argv.length < 4) {
  console.log('-: require two files as arguments');
  console.log('usage: file-diff file1 file2\n');
  process.exit(1);
}

const text1 = utils.readText(argv[2]);
const text2 = utils.readText(argv[3]);

const dmp = new DiffMatchPatch();
const diff = dmp.diff_main(text1, text2);
const patch = dmp.patch_make(diff);
const text = dmp.patch_toText(patch);
console.log('txt ', text);

// save to .diff
utils.writeText(`${utils.getPath(argv[2])}.diff`, text);
console.log(`diff file is saved to ${utils.getPath(argv[2])}.diff`);
