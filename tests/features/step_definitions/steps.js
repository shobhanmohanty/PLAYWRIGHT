import { Given,When,Then } from "@cucumber/cucumber";
import{test,expect,playwright} from "@playwright/test"
Given('a login to ecommerce application with {username} and {password}', function (username, password) {
    const login=new Loginpage()
    await login.gotoLoginPage();
    await login.login('username','password')
    await page.waitForTimeout(3000)

  // Write code here that turns the phrase above into concrete actions
  
});
When('Start to type your When step here wait till the {string} button appeares', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
Then('add {string} to the cart', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('navigate to the cart page', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
Then('verify the product {string} is added to the cart', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});