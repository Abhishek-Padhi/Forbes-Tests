var HeaderLinksTest=require('../Locators/HeaderLinksLocators');
var test=require('../Util');
var prequisites=require('../ForbesConstants');

describe("Checking the working of the links in the header of the web page",function(){

    browser.waitForAngularEnabled(false);
    browser.get("https://www.forbes.com/");
    browser.ignoreSynchronization=true;

    
    it("checking the billionaires link button",function(){
        test.waitClick(HeaderLinksTest.Billionaires);
        browser.wait(browser.getCurrentUrl(URL)).then(function () {


            //matches the url of the current page with the desired url

            expect(browser.getCurrentUrl()).toContain('https://www.forbes.com/worlds-billionaires/');
            console.log("working");

        })
        browser.wait(HeaderLinksTest.ChannelTitle.isDisplayed(),20000).then(function(){

            expect(HeaderLinksTest.ChannelTitle.getText()).toEqual("Billionaires").then(function () {

                console.log("Channel Title is correct");
            })
        })
       
    }) ;
    

    it("checking the innovation link button",function(){
        test.waitClick(HeaderLinksTest.Innovation);
        browser.wait(browser.getCurrentUrl()).then(function () {


            //matches the url of the current page with the desired url

            expect(browser.getCurrentUrl(URL)).toContain('https://www.forbes.com/innovation/');
            console.log("working");

        })
        browser.wait(HeaderLinksTest.ChannelTitle.isDisplayed(),20000).then(function(){

            expect(HeaderLinksTest.ChannelTitle.getText()).toEqual("Innovation").then(function () {

                console.log("Channel Title is correct ");
            })
        })


    });

    it("checking the Leadership link button",function(){
        test.waitClick(HeaderLinksTest.Leadership);
        browser.wait(browser.getCurrentUrl(URL)).then(function () {


            //matches the url of the current page with the desired url

            expect(browser.getCurrentUrl(URL)).toContain('https://www.forbes.com/leadership');
            console.log("working");

        })
        browser.wait(HeaderLinksTest.ChannelTitle.isDisplayed(),20000).then(function(){

            expect(HeaderLinksTest.ChannelTitle.getText()).toEqual("Leadership").then(function () {

                console.log("Channel Title is correct bro");
            })
        })


    });

    it("checking the Money link button",function(){
        test.waitClick(HeaderLinksTest.Money);
        browser.wait(browser.getCurrentUrl()).then(function () {


            //matches the url of the current page with the desired url

            expect(browser.getCurrentUrl(URL)).toContain('https://www.forbes.com/money/');
            console.log("working");

        })
        browser.wait(HeaderLinksTest.ChannelTitle.isDisplayed(),20000).then(function(){

            expect(HeaderLinksTest.ChannelTitle.getText()).toEqual("Money").then(function () {

                console.log("Channel Title is correct");

            })
        })
       
        browser.close();



    },120000);
   


});

