import {test,expect} from '@playwright/test';

test.describe('Actions', () => {
    
    test('Hover Actions', async({page}) => {
        await page.goto('https://www.amazon.com/');
        await page.setViewportSize({width:1920,height:950});
        const helloSignInLink=page.locator('#nav-link-accountList');
        await page.waitForSelector('#nav-link-accountList');
        await helloSignInLink.hover();
        await page.waitForTimeout(3000);
        await page.locator("//span[text()='Watchlist']").hover();
        await page.waitForTimeout(3000);
        await page.close();
    });

    test('Right Click', async({page}) => {
        await page.goto('https://demo.guru99.com/test/simple_context_menu.html');
        await page.setViewportSize({width:1920,height:950});
        const rightClickMe=page.getByText('right click me');
        await rightClickMe.click(); // Normal Click Yapar
        await rightClickMe.click({button:'right'}); //Right Click Yapar
        await expect(page.getByText('Quit')).toBeVisible();

        await page.waitForTimeout(3000);
        await page.close();
    });

    test('Doble Click', async({page,context}) => {
        await page.goto('https://demoqa.com/buttons');
        await page.setViewportSize({width:1920,height:950});
        const dbclkbtn= page.getByText('Double Click Me')
        await dbclkbtn.dblclick();
        await expect(page.locator('id=doubleClickMessage')).toBeVisible();

        //Aynı Test govdesi içinde farklı bir sayfadan test yapabilir miyiz? Nasıl
        const page2=await context.newPage();
        await page2.setViewportSize({width:1920,height:950});
        await page2.goto('https://testautomationpractice.blogspot.com/');
        await page2.evaluate(()=>{window.scroll(0,300)});
        await page2.getByText('Copy Text').dblclick();
        expect.soft(await page2.locator('#field2').inputValue()).toBe("Hello World!");
       // await expect(page2.locator('#field2')).toHaveValue("Hello World!");
        await page.bringToFront();

        await page2.close();
        await page.close();
    });

    test('Drag and Drop', async({page,context}) => {
        await page.setViewportSize({width:1920,height:950});
        await page.goto('https://testautomationpractice.blogspot.com/');
        await page.evaluate(()=>{window.scroll(0,300)});
        const sourceElement=page.getByText('Drag me to my target');
        const targetElement=page.getByText('Drop here');

        await sourceElement.dragTo(targetElement);

        const droppedText:string|null =await page.locator('#droppable p').textContent();
        expect(droppedText).toBe("Dropped!")        
    });

    test('Keyboard Actions', async({page,context}) => {
        await page.goto('https://testotomasyonu.com/')
        const searchBox= page.locator('.search-label').nth(0)

        await searchBox.fill('Samsung White Smart Phone');
        await page.keyboard.down('Shift');

        for(let i=0; i<'phone'.length; i++){
            await page.keyboard.press('ArrowLeft');
            await page.waitForTimeout(1000);
        }

        await page.keyboard.up('Shift');
        await page.waitForTimeout(1000);
        await page.keyboard.press('Backspace');
        await page.waitForTimeout(2000);

        await page.keyboard.press('W')
        await page.keyboard.press('a')
        await page.keyboard.press('t')
        await page.keyboard.press('c')
        await page.keyboard.press('h')

        await page.keyboard.press('Control+A')
        await page.waitForTimeout(1000);
        await page.keyboard.press('Control+X')
        await page.waitForTimeout(1000);
        await page.keyboard.press('Control+V')
        await page.waitForTimeout(1000);
        await page.keyboard.press('Enter')
        await page.waitForTimeout(4000);


       await page.close()




    });
});