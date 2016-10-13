'use strict';

const homedir = require('../');
const fs = require('fs');
const mm = require('mm');
const assert = require('power-assert');

describe('index.test.js', () => {
  it('should work', () => {
    assert.ok(fs.existsSync(homedir()));
  });

  it('should return homedir when process.env.HOME is not exist', () => {
    if (parseInt(process.version.slice(1)) >= 6) {
      mm(process.env, 'HOME', '');
      assert.ok(fs.existsSync(homedir()));
    }
  });
});
