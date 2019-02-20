var HeaderLinks=function(){
    this.Billionaires=element(by.xpath('//a[@href="https://www.forbes.com/worlds-billionaires/"]'));
    this.Innovation=element(by.xpath('//a[@href="https://www.forbes.com/innovation/"]'));
    this.Leadership=element(by.xpath('//a[@href="https://www.forbes.com/leadership/"]'));
    this.Money=element(by.xpath('//a[@href="https://www.forbes.com/money/"]'));
    this.ChannelTitle=element(by.className('channel-title ng-binding'));


}
module.exports=new HeaderLinks();