var SocialSites = require('../Locators/SocialSitesLocators');
var test = require('../Util');

describe("Testing the social media buttons", function () {

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get("https://www.forbes.com/");
        browser.ignoreSynchronization = true;
    });

    it("testing the facebook button", function () {

        //clicking the facebook button
        test.waitClick(SocialSites.FbButton);

        browser.waitForAngular();


            browser.getAllWindowHandles().then(function (handles) {
                //switching to newly opened tab

                browser.switchTo().window(handles[1]).then(function () {

                    
                    //Getting the URL from the new tab

                    browser.wait(browser.getCurrentUrl()).then(function (URL) {


                        //matches the url of the current page with the desired url

                        expect(browser.getCurrentUrl()).toContain('https://www.facebook.com/forbes');

                    })
                

                //Printing that Forbes Facebook page is opened

                console.log('Forbes Facebook Page opened');

                //closing the opened tab
                browser.close();


                //Switching back to the first Tab
                browser.switchTo().window(handles[0]);

            });
        }, 90000);
    })

    it("testing the twitter button", function () {

        //clicking the twitter button
        test.waitClick(SocialSites.TwitterButton);

        browser.waitForAngular();

        browser.getAllWindowHandles().then(function (handles) {
            //switching to newly opened tab

            browser.switchTo().window(handles[1]).then(function () {


                //Getting the URL from the new tab

                browser.wait(browser.getCurrentUrl()).then(function (URL) {


                    //matches the url of the current page with the desired url

                    expect(browser.getCurrentUrl()).toContain('https://twitter.com/forbes/');

                })

                //Printing that Forbes Twitter page is opened

                console.log('Forbes Twitter Page opened');

                //closing the opened tab
                browser.close();


                //Switching back to the first Tab
                browser.switchTo().window(handles[0]);

            });
        });
    })

    it("testing the Instagram button", function () {

        //clicking the Instagram button
        test.waitClick(SocialSites.InstaButton);

        browser.waitForAngular();

        browser.getAllWindowHandles().then(function (handles) {
            //switching to newly opened tab

            browser.switchTo().window(handles[1]).then(function () {


                //Getting the URL from the new tab

                browser.wait(browser.getCurrentUrl()).then(function (URL) {


                    //matches the url of the current page with the desired url

                    expect(browser.getCurrentUrl()).toContain('https://www.instagram.com/forbes/');

                })

                //Printing that Forbes Instagram page is opened

                console.log('Forbes INstagram Page opened');

                //closing the opened tab
                browser.close();


                //Switching back to the first Tab
                browser.switchTo().window(handles[0]);

            });
        });
    })
})