import {test,expect} from '@playwright/test';


test.describe('hard Assertions',async()=>{

test.skip('Demoblaze', async({page})=>{  //.skip bu suitte devre dışı bırakmayı ifade eder
    await page.goto('https://www.demoblaze.com/');
    await expect(page).toHaveTitle('STORE')
    await expect(page).toHaveURL('https://www.demoblaze.com/')
    // await expect(page.getByText('Place Order').nth(1)).toBeAttached();
    await expect(page.getByText('Place Order').nth(1)).not.toBeAttached();
})

test('TestAutomationpractice', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#male').check();
    await expect(page.locator('#male')).toBeChecked();
    //Locate edilen checkBox öğe tıklanmış halde mi?

    await expect(page.locator('#name')).toBeEnabled();
   //Locate edilen öğenin enable olup olmadığını kontrol eder

    await expect(page.locator('#name')).not.toBeDisabled();
    //Locate edilen öğenin disable olup olmadığını kontrol eder

    await expect(page.locator('#name')).toBeEmpty();
    ///Locate edilen öğenin boş olup olmadığını kontrol eder

    await page.locator('#name').fill('Murat');
    // await expect(page.locator('#name')).toBeEmpty();
    await expect(page.locator('#name')).toHaveValue('Murat')
    //Locate edilen öğenin içindeki değerin verilenle aynı olup olmadığını kontrol eder
});

test('DemoQA.com', async({page})=>{
    await page.goto('https://demoqa.com/');
    await expect(page.getByText('Book Store Application')).not.toBeInViewport();
    await expect(page.getByAltText('Selenium Online Training')).toBeInViewport();
    //Açılan ekran penceresindei alanda görünüp görünmediğine bakar

    await expect(page.getByText('Book Store Application')).toContainText('Store');
    await expect(page.getByText('Book Store Application')).toContainText('ion');
    await expect(page.getByText('Book Store Application')).toContainText('Book Store Application');
    //Locate edilen yazının içinde verilen metin parçasının var olup olmadığına bakar

    await expect(page.getByText('Book Store Application')).toHaveText('Book Store Application');
    await expect(page.getByText('Book Store Application')).toHaveText('Book Store Application ');
    await expect(page.getByText('Book Store Application')).toHaveText(' Book Store Application');
    await expect(page.getByText('Book Store Application')).toHaveText('book Store Application');
    //locate edilen yazının verilenle birebir aynı olup olmadığına bakar
    

})




});

