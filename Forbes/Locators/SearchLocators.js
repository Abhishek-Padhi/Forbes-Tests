
var SearchLocators = function () {

    this.SearchButton = element(by.className('icon--search'));
    this.Textbox = element(by.className('search-modal__input'));
    this.SearchArrow = element(by.xpath('/html/body/div[1]/div[3]/form/button'));

    this.SearchBoxInput = element(by.css('.search-box__input fs-responsive-text fs-text-xl'));
    this.Mostrelevant = element(by.xpath('//div[@class="search-content main-content__left-col"]/div[2]/div[1]'));
    this.MostRecent = element(by.xpath('//div[@class="search-content main-content__left-col"]/div[2]/div[2]'));

}
module.exports = new SearchLocators();
