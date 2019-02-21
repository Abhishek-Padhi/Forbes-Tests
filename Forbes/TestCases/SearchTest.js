var SearchTest = require('../Locators/SearchLocators');
var test = require('../Util');

var data = "India";


describe("Checking the Search Functionality", function () {

    browser.waitForAngularEnabled(false);
    browser.get("https://www.forbes.com/");
    browser.ignoreSynchronization = true;

    it("Testing the Search function", function () {
        //clicking the Search icon
        test.waitClick(SearchTest.SearchButton);

        //sending some data to the search button
        SearchTest.Textbox.sendKeys(data);

        test.waitClick(SearchTest.SearchArrow);

        browser.wait(browser.getCurrentUrl(URL)).then(function () {


            //matches the url of the current page with the desired url

            expect(browser.getCurrentUrl()).toContain('?q=' + data + '#');
            console.log("working");

        })
        //checking the most relevant
        test.waitClick(SearchTest.Mostrelevant);

        //checking the most recent
        test.waitClick(SearchTest.MostRecent);

        test.waitExit(SearchTest.MostRecent);

    });

});