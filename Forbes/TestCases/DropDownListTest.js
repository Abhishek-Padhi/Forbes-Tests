var DropDownList = require('../Locators/DropDownLocators');
var test = require('../Util');

var LinkTexts = [" Billionaires", "Forbes 400", "America's Richest Self-Made Women", "China's Richest", "India's Richest",
    "Indonesia's Richest", "Korea's Richest", "Thailand's Richest", "Japan's Richest", "Autralia's Richest", "Taiwan's Richest",
    "Singapore's Richest", "Phillipines's Richest", "Hong Kong's Richest", "Malaysia's Richest"];

describe("Testing the social media buttons", function () {

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get("https://www.forbes.com/");
        browser.ignoreSynchronization = true;
    });
    it("Checking the dropdown items", function () {
       // console.log("Starting");
        browser.actions().mouseMove(DropDownList.Billionaires).perform();
        browser.sleep(5000);

        DropDownList.Billionairelinks.each(function (billionaire, index) {

            expect(billionaire.getText()).toBe(LinkTexts[index]);
            console.log("working");


        });

    });
});