

describe("Sample",function(){

    it("checking",function(){
        browser.waitForAngularEnabled(false);
        browser.get("https://www.forbes.com/");
        browser.ignoreSynchronization=true;
        console.log("working");
        browser.sleep(6000);
        element(by.className('icon--search')).click();
       // element(by.xpath('//a[@href="https://www.forbes.com/worlds-billionaires/"]')).click();
        browser.sleep(5000);

    })
})