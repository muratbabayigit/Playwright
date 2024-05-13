import {test,expect} from '@playwright/test';

test.beforeEach( async({page})=>{
   await page.goto('https://www.testotomasyonu.com');
});

test.describe('test group',()=>{   // birden fazla test içeren bir test suiti oluşturduk
    //1. test
    test("Page Title Check", async ({page}) =>{
       
        await expect(page).toHaveTitle(/Test/);
    
 }
 
 );
 //2.Test
 test("Page URL Check", async ({page}) =>{
    await expect(page).toHaveURL('https://www.testotomasyonu.com')
}

);

});
