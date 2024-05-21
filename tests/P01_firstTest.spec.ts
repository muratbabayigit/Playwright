import {test,expect} from '@playwright/test';
import { Faker, faker } from '@faker-js/faker';

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
});

test('deneme', async({page}) => {
       await page.goto('https://babayigit.net/test/login.html')
       const fakeName=faker.person.fullName();
       const fakePhone=faker.phone.number();
       await page.locator("//input[@name='username']").fill(fakeName);
       await page.locator("//input[@name='password']").fill(fakePhone);
       await page.locator("//input[@value='Login']").click();
       page.close();
       
});


