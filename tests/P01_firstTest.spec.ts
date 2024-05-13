import {test,expect} from '@playwright/test';

test("TestOtomasyonu.com", async ({page}) =>{
       await page.goto('https://www.testotomasyonu.com');
       await expect(page).toHaveTitle(/Test/);
       // toHaveTitle komutunda title'ın bir parçayı içerip içermediğine bakılıyorsa (/test/) şeklinde yazılır
       // eğer birbir aynısı mı diye bakılacaksa 'Test Otomasyonu - Test Otomasyonu' şeklinde yazılmalıdır
       await expect(page).toHaveURL('https://www.testotomasyonu.com')
}

);

test("firsttest", async({page})=>{
       await page.goto('https://www.babayigit.net')
})


