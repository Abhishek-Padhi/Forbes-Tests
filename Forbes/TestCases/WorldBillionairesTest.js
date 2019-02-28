var WorldBillionairesTest = require('../Locators/WorldBillionairesLocators');

var test = require('../Util');

var data="India";


describe("Testing World's Billionaires Feature", function () {

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get("https://www.forbes.com/");
        browser.ignoreSynchronization = true;
    })

    it("Checking the list",function(){
        browser.actions().mouseMove(WorldBillionairesTest.Billionaires).perform();
        test.waitClick(WorldBillionairesTest.RichestList);
        
        test.waitClick(WorldBillionairesTest.NextTen);

        test.waitClick(WorldBillionairesTest.FullList);
        
        test.waitSend(WorldBillionairesTest.SearchBox,data);


        



    })



})