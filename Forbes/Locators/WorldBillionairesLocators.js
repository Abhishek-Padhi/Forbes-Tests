var WorldBillionairesLocators=function(){
    this.Billionaires=element(by.xpath('//a[@href="https://www.forbes.com/worlds-billionaires/"]'));
    this.RichestList=element(by.xpath('//a[@href="https://www.forbes.com/billionaires/"]'));
    this.FullList=element(by.css('.full-list right a'));
    this.SearchBox=element(by.css('.list_search'));
    this.NextTen=element(by.css('.next ng-binding'));


    
   

}
module.exports=new WorldBillionairesLocators();
