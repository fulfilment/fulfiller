module.exports = function (w) {

  return {
    files: [
      'knexfile.js',
      'src/**/*.ts',
      'test/helpers/**/*.*',
      'migrations/**/*.*'
    ],
    tests: [
      'test/**/*.ts',
      '!test/bootstrap.test.js',
      'test/**/*.json',
      '!test/helpers/**/*.js'
    ],
    env: {
      type: 'node'
    },
    compilers: {
      '**/*.ts': w.compilers.typeScript({module: 'commonjs'})
    },
    setup: wallaby => {
      "use strict";
      wallaby.delayStart();

      let bootstrap = require('./test/helpers/sharedBootstrap');

      //bootstrap.before(() => wallaby.start());
      wallaby.start();
    },

  }
};
