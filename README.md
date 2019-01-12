# file-diff

Command line diff and patch tool for https://github.com/google/diff-match-patch

[![npm version](https://img.shields.io/npm/v/file-diff.svg)](https://www.npmjs.com/package/file-diff)

## Install via

```
npm install file-diff
```

## Usage

The package provides `file-diff` and `file-patch` commands.

### file-diff

```sh
$ file-diff file1 file2
```

will generate `file1.diff` near `file1`


### file-patch

```
$ file-patch file1.diff file
```

will apply `patch file` (file1.diff) to `file1`.
