import {test,expect} from '@playwright/test';
import exp from 'constants';


test.describe('Dialog Test', () => {
    test.beforeEach('BeforeEach', async({page}) => {
        await page.goto('https://testautomationpractice.blogspot.com/');
        await page.setViewportSize({width:1920, height:1080});
    });

    test('Alert Function', async({page}) => {

        page.on("dialog",dialog=>{
            expect(dialog.type()).toBe('alert')
            expect(dialog.message()).toBe('I am an alert box!')
            dialog.accept();
        })
        
        await page.waitForTimeout(2000)
        await page.click("//*[text()='Alert']"); 
    });


    test('Confirm Box', async({page}) => {
        
        page.on('dialog',dialog=>{
            expect(dialog.type()).toBe("confirm");
            expect(dialog.message()).toBe('Press a button!')
            //dialog.accept();
            dialog.dismiss();
        });

        //await page.click("//*[text()='Confirm Box']");
        await page.getByText('Confirm Box').click()

        expect (await page.locator('#demo').textContent()).toBe('You pressed Cancel!')
    });


    test('Prompt', async({page}) => {
        let promptValue:string;
        promptValue='Murat';

        page.on('dialog',dialog=>{
            dialog.accept(promptValue)
            //dialog.dismiss();
        })

        await page.click("//*[text()='Prompt']")

        expect(await page.locator('#demo').textContent()).toBe(`Hello ${promptValue}! How are you today?`)
        
    });
});