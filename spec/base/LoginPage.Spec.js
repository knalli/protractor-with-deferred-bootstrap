var env = require('../environment.js');
var LoadPage = require('./LoadPage.js');
var LoginPage = require('./LoginPage.js');

// myTest.js
describe('Login', function() {

  beforeEach(function() {
    return browser.get(env.baseUrl);
  });

  it('should start with a login form', function() {
    var loginPage = new LoginPage();
    return LoadPage.waitForDismiss().then(function(){
      return loginPage.login(browser.params.username, browser.params.password);
    });
  });
});
