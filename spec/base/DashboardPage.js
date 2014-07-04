/*global browser:false,element:false,by:false*/
fs = require('fs');

var Page = function() {

  this.screenshot = function () {
    browser.takeScreenshot().then(function(png) {
      var stream = fs.createWriteStream("/tmp/screenshot.png");
      stream.write(new Buffer(png, 'base64'));
      stream.end();
    });
  };

  this.waitFor = function() {
    return browser.driver.wait(function() {
      return browser.driver.getCurrentUrl().then(function(url) {
        return (/dashboard$/).test(url);
      });
    });
  };

  this.form = function() {
    return element(by.css('.content')).element(by.tagName('form'));
  };

  this.usernameBind = function() {
    return element(by.binding('session.username'));
  };

  this.logoutButton = function() {
    return this.form().element(by.css('button[type=submit]'));
  };

  this.logout = function(username) {
    var scope = this;
    this.waitFor().then(function(){
      return scope._logout(username);
    });
  };

  this._logout = function(username) {

    expect(browser.driver.getCurrentUrl()).toMatch('/dashboard');

    var usernameBind = this.usernameBind(),
        logoutButton = this.logoutButton();

    expect(usernameBind.getText()).toEqual(username);
    
    console.log("Logout: Click");
    logoutButton.click();
    console.log("Logout: Waiting...");

    return browser.driver.wait(function() {
      return browser.driver.getCurrentUrl().then(function(url) {
        return (/login$/).test(url);
      });
    });
  };
};

module.exports = Page;
