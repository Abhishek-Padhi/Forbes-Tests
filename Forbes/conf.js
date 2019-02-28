exports.config = {
  directConnect: true,

  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {

    'browserName': 'chrome',

  },

  framework: 'jasmine',

  specs: ['Forbes/TestCases/WorldBillionairesTest.js'],

  allScriptsTimeout: 1100000,

  onPrepare: function () {
    browser.manage().window().maximize(); //maximizes the window 
  },

  jasmineNodeOpts: {
    defaultTimeOutInterval: 100000
  }


}