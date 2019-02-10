#!/usr/bin/env node
'use strict'

const DiffMatchPatch = require('diff-match-patch');

const utils = require('./utils');

const usage = `
usage: file-diff [-h] file_origin file_modified
`.trim();

const [, , ...args] = process.argv;

function diffFiles() {
  if (args.length < 2) {
    console.log('-: require two files as arguments');
    console.log(usage);
    process.exit(1);
  }

  const [file1, file2] = args;
  const text1 = utils.readText(file1);
  const text2 = utils.readText(file2);

  const dmp = new DiffMatchPatch();
  const diff = dmp.diff_main(text1, text2);
  const patch = dmp.patch_make(diff);
  const text = dmp.patch_toText(patch);
  console.log('txt ', text);

  // save to .diff
  utils.writeText(`${utils.getPath(file1)}.diff`, text);
  console.log(`diff file is saved to ${utils.getPath(file1)}.diff`);
}

if (args.length === 0) {
  console.log(usage);
} else {
  switch (args[0]) {
    case '-h':
    case '--help':
      console.log(usage);
      break;
    default:
      diffFiles();
      break;
  }
}
