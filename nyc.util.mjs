/*
  This utility exists because nyc is generating inconsistent
  file paths in test coverage data.  This prevents component
  and e2e test data from being merged and reported correctly.

  Bug Report: https://github.com/istanbuljs/nyc/issues/1575

  This code is run from... npm run test:data:scrub
*/
import { readdir, readFileSync, stat, writeFileSync } from "fs";

const directory = ".nyc_output_data";

readdir(directory, (err, files) => {
  files.forEach((file) => {
    const fullPath = directory + "/" + file;

    stat(fullPath, (err, stats) => {
      if (stats.isFile()) {
        const data = readFileSync(fullPath)
          .toString()
          .replaceAll(/(\\){2,}/g, "/");
        writeFileSync(fullPath, data);
      }
    });
  });
});
