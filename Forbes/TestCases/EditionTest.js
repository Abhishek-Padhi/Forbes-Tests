var EditionTest = require('../Locators/EditionLocators');
var test = require('../Util');

describe("Checking the different editions of the website", function () {


    beforeEach(function(){
    browser.waitForAngularEnabled(false);
    browser.get("https://www.forbes.com/");
    browser.ignoreSynchronization = true;
    })

    it("Checking for the US edition", function () {

        //clicking the selection arrow button
        test.waitClick(EditionTest.ArrowButton);

        //clicking the US button
        test.waitClick(EditionTest.USEdition);

        //checking the url
        expect(browser.getCurrentUrl(URL)).toContain('home_usa');
        console.log("working");

    })
    it("Checking for the Europe edition", function () {

        //clicking the selection arrow button
        test.waitClick(EditionTest.ArrowButton);

        //clicking the Europe button
        test.waitClick(EditionTest.EuropeEdition);

        //checking the url
        expect(browser.getCurrentUrl(URL)).toContain('home_europe');
        console.log("working too");

    })


})