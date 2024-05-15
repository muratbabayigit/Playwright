import{test,expect} from '@playwright/test';

test.describe('Google Arama', () => {

    /*
    test.beforeEach test durumu eğer test.describe içinde tanımlanırsa 
    sadece o describe scope'u için geçerli olur.
    describe öncesinde(dışında) tanımlanırsa sayfadaki tüm describe'lar için geçerli 
    tüm describe'lar içindeki testlerin ilk adımı olur
    */

    test.beforeEach('Google Anasayfa',async({page})=>{
        await page.goto('https://www.google.com.tr/');
        await page.setViewportSize({width:1920, height:1080})

    })

    test('Nutella Arama Testi - AhmetHocaya ithafen...', async({page}) => {

        await page.locator('#APjFqb').fill('Nutella');
        await page.locator("//*[@name='btnK']").nth(1).press('Enter');
        await page.click('#hdtb-tls');
        const result=await page.locator('#result-stats').textContent(); //javadaki gettext gibi
      
        console.log("Test Sonucu: "+result)
          
      });

      test('WiseQuarter Arama Testi', async({page}) => {

        await page.locator('#APjFqb').fill('Wise Quarter');
        await page.locator("//*[@name='btnK']").nth(1).press('Enter');
        await page.click('#hdtb-tls');
        const result=await page.locator('#result-stats').textContent(); //javadaki gettext gibi
      
        console.log("Test Sonucu: "+result)
          
      });
    
});