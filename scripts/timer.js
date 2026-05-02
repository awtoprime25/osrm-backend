#!/usr/bin/env node
// Command execution timer - runs shell commands and logs execution time to file

import { execFile } from 'child_process';
import fs from 'fs';

const name = process.argv[2];
const args = process.argv.slice(3);
const start = Date.now();
execFile(args[0], args.slice(1), (err, stdout, stderr) => {
  if (err) {
    console.log(stdout);
    console.log(stderr);
    return process.exit(err.code);
  }
  const stop = +new Date();
  const time = (stop - start) / 1000.;
  fs.appendFileSync('/tmp/osrm.timings', `${name}\t${time}`, 'utf-8');
});