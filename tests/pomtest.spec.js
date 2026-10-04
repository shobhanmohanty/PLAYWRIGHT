import{test,expect} from '@playwright/test'
import { Loginpage } from './pages/Loginpage'
import { Homepage } from './pages/Homepage'
test('test',async({page})=>{
    const login=new Loginpage()
    await login.gotoLoginPage();
    await login.login('shobhan','shobhan')
    await page.waitForTimeout(3000)
})