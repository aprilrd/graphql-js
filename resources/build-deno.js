'use strict';

const fs = require('fs');
const path = require('path');

const babel = require('@babel/core');
const prettier = require('prettier');

const { readdirRecursive, showDirStats } = require('./utils');

const prettierConfig = JSON.parse(
  fs.readFileSync(require.resolve('../.prettierrc'), 'utf-8'),
);

if (require.main === module) {
  fs.rmSync('./denoDist', { recursive: true, force: true });
  fs.mkdirSync('./denoDist');

  const srcFiles = readdirRecursive('./src', { ignoreDir: /^__.*__$/ });
  for (const filepath of srcFiles) {
    const srcPath = path.join('./src', filepath);
    const destPath = path.join('./denoDist', filepath);

    fs.mkdirSync(path.dirname(destPath), { recursive: true });
<<<<<<< HEAD
    if (filepath.endsWith('.ts')) {
=======
    if (filepath.endsWith('.ts') && !filepath.endsWith('.d.ts')) {
>>>>>>> TS Migration: enable tests and remove flow infra (#3091)
      const options = { babelrc: false, configFile: './.babelrc-deno.json' };
      const output = babel.transformFileSync(srcPath, options).code + '\n';
      writeGeneratedFile(destPath, output);
    }
  }

  fs.copyFileSync('./LICENSE', './denoDist/LICENSE');
  fs.copyFileSync('./README.md', './denoDist/README.md');

  showDirStats('./denoDist');
}

function writeGeneratedFile(filepath, body) {
  const formatted = prettier.format(body, { filepath, ...prettierConfig });
  fs.writeFileSync(filepath, formatted);
}
