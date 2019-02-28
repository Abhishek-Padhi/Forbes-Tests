var ProfileCheckLocators=function(){
    this.Billionaires=element(by.xpath('//a[@href="https://www.forbes.com/worlds-billionaires/"]'));
    this.RichestList=element(by.xpath('//a[@href="https://www.forbes.com/forbes-400/"]'));
    this.FirstRank=element(by.xpath('//table[@class="ng-scope ng-table"]/tbody/tr[1]/td[1]/span'));
    this.Youngest=element.all(by.css('.filter-text ng-binding')).get(0);
    
   

}
module.exports=new ProfileCheckLocators();

