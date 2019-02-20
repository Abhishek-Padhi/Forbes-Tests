import { ExpectedConditions } from "protractor";


describe("Sample",function(){

    it("checking",function(){
        browser.waitForAngularEnabled(false);
        browser.get("https://www.forbes.com/");
        browser.ignoreSynchronization=true;
        element(by.xpath('//a[@href="https://www.forbes.com/worlds-billionaires/"]')).click();
        browser.sleep(5000);

    })
})