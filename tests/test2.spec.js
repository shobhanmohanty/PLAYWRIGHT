import {test,expect, Locator} from "@playwright/test"
test("Locator", async({page}) => {
let prod = "Nexus 6"
await page.goto("https://www.demoblaze.com/")
const login= page.locator("#login2")
await login.click()
await page.waitForTimeout(2000)
const username_ip = page.locator("#loginusername")
await username_ip.fill("Gaurav")
await page.waitForTimeout(2000)
const password_ip = page.locator("#loginpassword")
await password_ip.fill("Gaurav")
await page.waitForTimeout(2000)
const login_butt = page.locator("[onclick='logIn()']")
await login_butt.click()
await page.waitForTimeout(2000)
const allprods = await page.$$('//*[@id="tbodyid"]/div/div/div/h4/a')
for(const products of allprods){
    const text=(await products.textContent()).trim()
    if (prod === text)
        {
        await products.click()
        break;
    }
}
page.on('dialog',dialog=>dialog.accept())
await page.locator("text=Add To Cart").click()
await page.locator('#cartur').click()
await page.waitForTimeout(8000)
await expect((page).locator("tbody tr:has-text('Nexus 6')")).toBeVisible();
   
 
})
 