import { test,expect } from '@playwright/test';

test.describe('Form Elements', () => {

    test.beforeEach('TestAutomtionPractice', async({page}) => {
        await page.goto('https://testautomationpractice.blogspot.com/')
        await page.setViewportSize({width:1920, height:1080})

    });

    test.skip('textbox and radioButton', async({page}) => {
        
    
        const nameLocator=page.locator('#name');
        const mLocator=page.locator('#male');
        const fLocator=page.locator('#female');
    
        await nameLocator.fill('Murat');
        await mLocator.check();
    
        await expect.soft(nameLocator).toHaveValue('Murat');
        await expect.soft(mLocator).toBeChecked();
    
    
        const checkArr=[page.locator('#sunday'),page.locator('#monday'),page.locator('#tuesday'),page.locator('#wednesday'),page.locator('#thursday'),page.locator('#friday'),page.locator('#saturday')];
    
       for (const each of checkArr){
        await each.check();
        await expect(each).toBeChecked;
       }
    
    
    });
    
    test('DropDown menu', async({page}) => {
    
        await page.evaluate(()=>{window.scrollBy(0,500);});
        await page.waitForTimeout(3000); 
        await page.evaluate(()=>{window.scrollBy(0,-500);}); //Sayafayı (x,y) boyutlarında scroll eder
        await page.waitForTimeout(3000); 
        await page.evaluate(()=>{window.scrollBy(0,500);});
        const dropDown=page.locator('#country');
        await dropDown.selectOption("Japan");
        await page.waitForTimeout(3000);
        await dropDown.selectOption({value:"germany"});
        await page.waitForTimeout(3000);
        await dropDown.selectOption({index:5});
        await page.waitForTimeout(3000);
        const options=page.locator("#country option");
        await expect(options).toHaveCount(10);  

        expect(await options.allTextContents()).toContain("China")

        const optionsArray=page.$$("#country option")

        expect(await optionsArray).toHaveLength(10);
        let status:boolean;
        status=false;
        for (const each of await optionsArray){
            let opt=await each.textContent();

            if(opt=='China'){
                status=true;
                break;
            }
        }

        expect(status).toBeTruthy();




    });

     test('Multiple Select', async({page}) => {
        const multiSelect=page.locator('#colors')
        await page.evaluate(()=>{window.scrollBy(0,600);});
        await multiSelect.selectOption(["Red","Blue","Yellow"]);
        await  page.waitForTimeout(2500);
        await expect(multiSelect).toHaveValues(["red","blue","yellow"])
     });   

});

test.describe('Form Elements 2', () => {
    
});


