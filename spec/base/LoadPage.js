/*global browser:false,element:false,by:false*/

var Page = function() {
};

Page.waitForDismiss = function() {
  return browser.driver.wait(function() {
    return browser.driver.findElement(by.css('body > .splashscreen')).isDisplayed().then(function(displayed) {
      return !displayed;
    });
  });
};

module.exports = Page;
