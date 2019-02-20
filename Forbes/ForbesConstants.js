var ForbesConstants = function () {

    browser.waitForAngularEnabled(false);
    browser.get("https://www.forbes.com/");
    browser.ignoreSynchronization=true;
    
  
  }
  module.exports = new ForbesConstants();