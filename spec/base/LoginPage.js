/*global browser:false,element:false,by:false*/

var Page = function() {

  this.waitFor = function() {
    return browser.driver.wait(function() {
      return browser.driver.getCurrentUrl().then(function(url) {
        return (/login$/).test(url);
      });
    });
  };

  this.form = function() {
    return element(by.css('.login-form')).element(by.tagName('form'));
  };

  this.usernameInput = function() {
    return this.form().element(by.name('username'));
  };

  this.passwordInput = function() {
    return this.form().element(by.name('password'));
  };

  this.loginButton = function() {
    return this.form().element(by.css('button[type=submit]'));
  };

  this.login = function(username, password, rememberMe) {
    var scope = this;
    return this.waitFor().then(function(){
      return scope._login(username, password, rememberMe);
    });
  };

  this._login = function(username, password, rememberMe) {

    // Check we are at login
    expect(browser.driver.getCurrentUrl()).toMatch('/login');

    var usernameField = this.usernameInput(),
        passwordField = this.passwordInput(),
        loginButton = this.loginButton();

    //console.log('Login: Sending username: ' + username);
    usernameField.sendKeys(username);
    expect(usernameField.getAttribute('value')).toBe(username);

    //console.log('Login: Sending password: ' + password);
    passwordField.sendKeys(password);
    expect(passwordField.getAttribute('value')).toBe(password);

    expect(loginButton.isEnabled()).toBe(true);
    console.log("Login: Click");
    loginButton.click();
    console.log("Login: Waiting...");

    return browser.driver.wait(function() {
      return browser.driver.getCurrentUrl().then(function(url) {
        return (/dashboard$/).test(url);
      });
    });
  };
};

module.exports = Page;
