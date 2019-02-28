var SocialSitesLocators=function(){
    this.FbButton=element(by.xpath('//a[@href="https://www.facebook.com/forbes/"]'));
    this.TwitterButton=element(by.xpath('//a[@href="https://twitter.com/forbes/"]'));
    this.InstaButton=element(by.xpath('//a[@href="https://www.instagram.com/forbes/"]'));
    this.fbcheck=element(by.xpath('//*[@id="seo_h1_tag"]/a'));

}
module.exports=new SocialSitesLocators();
