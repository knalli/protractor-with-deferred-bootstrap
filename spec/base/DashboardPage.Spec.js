var env = require('../environment.js');
var LoadPage = require('./LoadPage.js');
var LoginPage = require('./LoginPage.js');
var DashboardPage = require('./DashboardPage.js');

// myTest.js
describe('Dashboard', function() {

  beforeEach(function() {
    browser.get(env.baseUrl);
  });

  it('should return to the login from a logged in session', function() {
    var loginPage = new LoginPage(), dashboardPage = new DashboardPage();
    return LoadPage.waitForDismiss().then(function(){
      return loginPage.login(browser.params.username, browser.params.password).then(function(){
        return dashboardPage.logout(browser.params.username);
      });
    }).then(function(){
      console.log('done');
    });
  });
});
