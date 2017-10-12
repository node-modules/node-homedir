'use strict';

const os = require('os');

module.exports = () => {
  if (process.env.MOCK_HOME_DIR) return process.env.MOCK_HOME_DIR;
  if (os.userInfo && os.userInfo().homedir) {
    return os.userInfo().homedir;
  } else if (os.homedir) {
    return os.homedir();
  }
  return process.env.HOME;
};
