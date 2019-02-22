var DropDownLocators = function () {
    this.Billionaires = element(by.xpath(''));
    
    this.Billionairelinks=element.all(by.xpath('//ul[@class="header__channel header__color--centennial-silver header__hoverable"]/div[@class="header__subnav"]/li[@class="header__section header__hoverable"]/a'));



    

}
module.exports=new DropDownLocators();