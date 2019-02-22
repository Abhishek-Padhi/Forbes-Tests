var EditionLocators=function(){
    this.ArrowButton=element(by.css('.edition-dropdown__button'));
    this.USEdition=element(by.xpath('//a[@href="/home_usa/"]'));
    this.EuropeEdition=element(by.xpath('//a[@href="/home_europe/"]'));
    this.AsiaEdition=element(by.xpath('//a[@href="/home_asia/"]'));

}
module.exports=new EditionLocators();
