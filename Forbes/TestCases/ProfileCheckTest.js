var ProfileCheckTest = require('../Locators/ProfileCheckLocators');
var test = require('../Util');
describe("Checking the profiles in the Forbes 400 list", function () {

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get("https://www.forbes.com/");
    browser.ignoreSynchronization = true;
    })

    it("Testing individual profiles", function () {

        //Hovering over the Billionaires Link
        browser.actions().mouseMove(ProfileCheckTest.Billionaires).perform();

        //Clicking on the Forbes 400 list
        test.waitClick(ProfileCheckTest.RichestList);

        var scrollIntoView = function () {
         arguments[0].scrollIntoView();
     }
     browser.executeScript(scrollIntoView,ProfileCheckTest.FirstRank);
        //test.scrollTo(ProfileCheckTest.FirstRank);

      // browser.actions().mouseMove(ProfileCheckTest.FirstRank).perform();
      

        browser.sleep(15000);
        ProfileCheckTest.Youngest.click();
        browser.sleep(15000);
        console.log("Working");



        //test.waitClick(ProfileCheckTest.FirstRank);
       // ProfileCheckTest.FirstRank.click();
       // browser.sleep(5000);

    })

})