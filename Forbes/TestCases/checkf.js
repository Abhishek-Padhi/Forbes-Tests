


describe("Sample", function () {

    it("checking", function () {
        browser.waitForAngularEnabled(false);
        browser.get("https://www.forbes.com/");
        browser.ignoreSynchronization = true;
        console.log("working");
        browser.sleep(6000);
        element(by.xpath('/html/body/div[1]/header/nav/div[2]/ul/li[1]/div[2]/ul/li[2]/a')).click();
        browser.sleep(5000);

        // element(by.className('icon--search')).click();
        // element(by.xpath('//a[@href="https://www.forbes.com/worlds-billionaires/"]')).click();
       /* 
        element.all(by.css('.header__sections header__color--centennial-silver .header__section header__hoverable a')).then(function (links) {
            expect(links.length).toBe(15);
            console.log("Length is correct");
            expect(links[0].getText()).toBe("World's Billionaires");
            console.log("correct");

        })

    })
})