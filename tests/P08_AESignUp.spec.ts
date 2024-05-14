import{test,expect} from '@playwright/test';

test('AE SignUp Test', async({page}) => {
    await page.goto('https://automationexercise.com/')
    await expect.soft(page.getByAltText('Website for automation practice')).toBeVisible();
    await page.getByText(' Signup / Login').click();
    await expect(page.getByText('New User Signup!')).toBeVisible();
    await page.getByPlaceholder('Name').fill('WiseQuarter')
    await page.getByPlaceholder('Email Address').nth(1).fill('wise6@quarter.com');
    await page.locator("//button[@data-qa='signup-button']").press('Enter')
    await page.locator('#id_gender2').click();
    await page.locator(('#password')).fill('71KKale&');
    await page.locator('#days').selectOption("1");
    await page.locator('#months').selectOption("May");
    await page.locator('#years').selectOption("1980");
    await page.locator('#newsletter').click();
    await page.locator(('#first_name')).fill('Murat')
    await page.locator(('#last_name')).fill('Yiğit');
    await page.locator(('#address1')).fill('Üsküdar');
    await page.locator(('#country')).selectOption({index:2});
    await page.locator(('#state')).fill('Non Usa');
    await page.locator(('#city')).fill('İstanbul');
    await page.locator(('#zipcode')).fill('34685');
    await page.locator(('#mobile_number')).fill('25369852');
   
    await page.locator("//*[@type='submit']").nth(0).click();
    await expect.soft(page.getByText('ACCOUNT CREATED!')).toBeVisible();

});