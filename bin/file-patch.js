#!/usr/bin/env node
'use strict'

const DiffMatchPatch = require('diff-match-patch');

const utils = require('./utils');

const usage = `
usage: file-patch [-h] diff_file target_file
`.trim();

const [, , ...args] = process.argv;

function patchFile() {
  if (args.length < 2) {
    console.log('-: require two files as arguments');
    console.log(usage);
    process.exit(1);
  }

  const [file1, file2] = args;
  const patch_text = utils.readText(file1);
  const text1 = utils.readText(file2);
  const dmp = new DiffMatchPatch();
  const patch = dmp.patch_fromText(patch_text);
  const [patched_text, result] = dmp.patch_apply(patch, text1);

  if (result[0]) { // save to file
    utils.writeText(utils.getPath(file2), patched_text);
    console.log(`${utils.getPath(file2)} has been patched`);
  } else {
    console.warn('patch fail', result);
  }
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
      patchFile();
      break;
  }
}
