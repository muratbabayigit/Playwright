import{test,expect} from '@playwright/test';

test.describe('Windows Handling', () => {
    
    test.beforeEach('BeforeEach',async ({page}) => {
        await page.goto('https://demoqa.com/browser-windows');
        await page.setViewportSize({width:1920, height:1080});
        await page.evaluate(()=>{window.scroll(0,500)});
    });



    test.skip('New Tab', async({page}) => {
        const tabButton=page.locator('#tabButton');
        await tabButton.click();

        const newTabText=page.getByText('This is a sample page');
        await expect(newTabText).toBeVisible(); //Hatalı sorgu
    });

    test('test with new tab', async({page,context}) => {
        const tabButton=page.locator('#tabButton');

        const pagePromise=context.waitForEvent('page'); //context'in yeni page olarak atama işlemi
        await tabButton.click();
        const page2=await pagePromise;
        await page2.setViewportSize({width:1920, height:1080});
        await page2.waitForLoadState(); //yeni açılan tab'da yüklenmesini bekliyorum

        const newTabText=page2.getByText('This is a sample page');
        await expect(newTabText).toBeVisible();

        await page.bringToFront();
        await page.waitForTimeout(4000);
        await page.getByText('Elements').click();
        await page2.bringToFront();
        await page.waitForTimeout(4000);
        await page2.close();
        await page.close();
    });


    test('Popup', async({page,context}) => {
        const popupPromise=page.waitForEvent('popup');
        await page.getByText('New Window').nth(0).click();

        const popup=await popupPromise;
        popup.waitForLoadState();

        await expect(popup.getByText('This is a sample page')).toBeVisible();
        await page.waitForTimeout(4000);
        await popup.close();
        await page.waitForTimeout(4000);
        await page.close();


    });
});
