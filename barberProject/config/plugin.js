'use strict';

// had enabled by egg
// exports.static = true;
exports.proxyworker = {
  enable: true,
  package: 'egg-development-proxyworker',
};
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
exports.validate = {
  enable: true,
  package: 'egg-validate',
};
exports.redis = {
  enable: true,
  package: 'egg-redis',
};

