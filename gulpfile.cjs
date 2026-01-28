
const { createRequire } = require('module');
const require = createRequire(import.meta.url);

const esmExports = require('./gulpfile.mjs');

module.exports = {
  build: esmExports.build,
  dev: esmExports.dev,
  start: esmExports.start,
  nomin: esmExports.nomin,
  optimize: esmExports.optimize,
  webp: esmExports.webp,
  avif: esmExports.avif,
};
