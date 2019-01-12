#!/usr/bin/env node
'use strict'

const fs = require('fs');
const path = require("path");
const DiffMatchPatch = require('diff-match-patch');

const argv = process.argv;

if (argv.length < 4) {
  console.log('-: require two files as arguments');
  console.log('usage: file-diff file1 file2\n');
  process.exit(1);
}

const encoding = 'utf-8';
const text1 = fs.readFileSync(path.resolve(argv[2]), encoding);
const text2 = fs.readFileSync(path.resolve(argv[3]), encoding);

const dmp = new DiffMatchPatch();
const diff = dmp.diff_main(text1, text2)
const patch = dmp.patch_make(diff)
const text = dmp.patch_toText(patch)
console.log('txt ', text)

// save to .diff
fs.writeFileSync(`${path.resolve(argv[2])}.diff`, text, encoding)
console.log(`diff file is saved to ${path.resolve(argv[2])}.diff`)
