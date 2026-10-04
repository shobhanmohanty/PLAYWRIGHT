const{test, expect} = require('@playwright/test');
test('checking new window',async({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const documentLink=page.locator("[href*='documents-request']");
    const newpage=await

    

})