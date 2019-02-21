
var SearchLocators=function(){

    this.SearchButton= element(by.className('icon--search'));
    this.Textbox=element(by.className('search-modal__input'));
    this.SearchArrow=element(by.xpath('/html/body/div[1]/div[2]/form/button/svg'));
    
    this.SearchBoxInput=element(by.css('.search-box__input fs-responsive-text fs-text-xl'));
    this.Mostrelevant=element(by.css('.search-sort__button search-sort__button-relevant search-sort__button--selected'));
    this.MostRecent=element(by.css('.search-sort__button search-sort__button-recent'));
    
}
module.exports=new SearchLocators();
