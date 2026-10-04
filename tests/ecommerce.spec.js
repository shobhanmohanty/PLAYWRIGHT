import{test,expect} from '@playwright/test'
test("check out product",async ({page})=>{
    await page.goto("https://demoblaze.com/")
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill("shobhan")
    await page.locator('#loginpassword').fill("shobhan")
    
    page.on('dialog',dialog=>dialog.accept())
    await page.locator('button[onclick="logIn()"]').click()
    await page.locator("#logout2").waitFor()
    await page.getByRole('link',{name:'Nexus 6'}).click()
    
    await page.locator('[onclick="addToCart(3)"]').waitFor()
    await page.getByText('Add to cart').click()
    await page.locator('#cartur').click()
    await expect(page.getByText('Nexus 6')).toBeVisible()





})