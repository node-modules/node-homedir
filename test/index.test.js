'use strict';

const homedir = require('..');
const fs = require('fs');
const mm = require('mm');
const os = require('os');
const assert = require('power-assert');

describe('index.test.js', () => {
  afterEach(mm.restore);

  it('should work', () => {
    assert.ok(fs.existsSync(homedir()));
  });

  it('should return homedir when process.env.HOME is not exist', () => {
    if (parseInt(process.version.slice(1)) >= 6) {
      mm(process.env, 'HOME', '');
      assert.ok(fs.existsSync(homedir()));
    }
  });

  it('should return MOCK_HOME_DIR when exist', () => {
    mm(process.env, 'MOCK_HOME_DIR', '/tmp');
    assert(homedir() === '/tmp');
  });

  it('should return homedir when os.userInfo() throw ENOENT error', () => {
    mm(os, 'userInfo', () => {
      const err = new Error('no such file or directory, uv_os_get_passwd');
      err.code = 'ENOENT';
      throw err;
    });

    assert.ok(fs.existsSync(homedir()));
  });
});
