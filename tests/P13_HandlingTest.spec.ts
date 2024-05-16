import{test,expect} from '@playwright/test';

test('handling test', async({page,context}) => {
    
    await page.goto('https://www.google.com')
    await page.goto('https://www.wisequarter.com')
    let title=await page.title();
    console.log(`Wise Quarter Title: ${title}`); //Interpolation**Tilda(``)
    await page.goBack();
    await page.waitForTimeout(2000);
    await page.goForward();

    const page2=await context.newPage();
    await page2.goto('https://www.babayigit.net')
    title=await page2.title();
    console.log(`BABAYIGIT Title: ${title}`);
    await page.bringToFront();
    await page.waitForTimeout(2000);
    await page2.close();
    await page.close();

});