import{test,expect} from '@playwright/test';

test.describe('Iframes Tests', () => {
    
    test.beforeEach('BeforeEach', async({page}) => {
        await page.goto('https://demoqa.com/frames');
        await page.setViewportSize({width:1920,height:1080});

    });

    test('iframe Gecis', async({page}) => {
        const frame1=page.frameLocator('#frame1') //Bana hangi frame içinde işlem yapacağımı belirledi.

    expect (await frame1.getByText('This is a sample page').textContent()).toBe('This is a sample page')
    });
});