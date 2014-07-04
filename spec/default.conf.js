var env = require('./environment.js');

console.log("Server URL: " + env.baseUrl);

module.exports.config = {

  //allScriptsTimeout: 20000,

  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: env.capabilities,

  params: env.params,

  baseUrl: 'about:blank',
  //baseUrl: env.baseUrl,

  rootElement: 'html',

  onPrepare: function () {
      // do something before running tests
  },

  suites: {
      base:  ['base/**/*.Spec.js']
  }
};
