#!/usr/bin/env node
'use strict'

const fs = require('fs');
const path = require("path");
const DiffMatchPatch = require('diff-match-patch');

const argv = process.argv;

if (argv.length < 4) {
  console.log('-: require two files as arguments');
  console.log('usage: file-patch patch file\n');
  process.exit(1);
}

const encoding = 'utf-8';
const patch_text = fs.readFileSync(path.resolve(argv[2]), encoding);
const text1 = fs.readFileSync(path.resolve(argv[3]), encoding);
const dmp = new DiffMatchPatch();
const patch = dmp.patch_fromText(patch_text)
const [patched_text, result] = dmp.patch_apply(patch, text1)

if (result[0]) { // save to file
  fs.writeFileSync(`${path.resolve(argv[3])}`, patched_text, encoding)
  console.log(`${path.resolve(argv[3])} has been patched`)
} else {
  console.warn('patch fail', result)
}
