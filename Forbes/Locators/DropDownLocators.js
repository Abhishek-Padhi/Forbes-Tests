var DropDownLocators = function () {
    
    this.Billionaires=element(by.xpath('//a[@href="https://www.forbes.com/worlds-billionaires/"]'));
    this.Billionairelinks=element.all(by.css('.header__channel header__color--centennial-silver header__hoverable .header__subnav .header__sections header__color--centennial-silver .header__section header__hoverable a'));




    

}
module.exports=new DropDownLocators();