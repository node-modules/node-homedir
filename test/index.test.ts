import { strict as assert } from 'node:assert';
import fs from 'node:fs';
import os from 'node:os';
import mm from 'mm';
import homedir from '../src/index.js';
import { homedir as homedir2 } from '../src/index.js';

describe('index.test.ts', () => {
  afterEach(mm.restore);

  it('should work', () => {
    assert.ok(fs.existsSync(homedir()));
    assert.ok(fs.existsSync(homedir2()));
    assert.equal(homedir(), homedir2());
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
      Reflect.set(err, 'code', 'ENOENT');
      throw err;
    });

    assert.ok(fs.existsSync(homedir()));
  });
});
