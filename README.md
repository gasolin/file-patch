# file-patch

Command line diff / patch tool for https://github.com/google/diff-match-patch

[![npm version](https://img.shields.io/npm/v/file-patch.svg)](https://www.npmjs.com/package/file-patch)

file-patch can compare and modify any text base files in any operating system.

If you have modified some part of your dependent modules or libraries (modified certain block in apache config, change color for blog theme...) `file-patch` can reduce your effort to maintain and upgrade these files.

## Install

You can install it via npm

```
npm install file-diff
```

## Usage

After install the package provides `file-diff` and `file-patch` commands. They can be used to compare and modify any text base files.

## Examples

You can find some [examples](https://github.com/gasolin/file-patch/tree/master/examples) in the source repo. Each example contain 3 files: 
- the origin file
- the modified file (with `-mod` mid-fix)
- the diff file (with `.diff` subfix)

You can run `npm run examples-diff` command to genereate `.diff` file via `file-diff`. Or run `npm run examples-patch` command to make the origin file exactly the same as the modified file.

### file-diff

`file-diff` can compare 2 files and generate the `diff-style` file.

```sh
$ file-diff file1 file2
```

will generate `file1.diff` near `file1`


### file-patch

`file-patch` can apply the diff file to the target file.

```
$ file-patch file1.diff file
```

will apply `patch file` (file1.diff) to `file1`.
