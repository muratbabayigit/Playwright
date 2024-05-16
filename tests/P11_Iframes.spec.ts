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

    test('iframe Gecis 2', async({page}) => {
        const frame1=page.frame({url:'https://demoqa.com/sample'});
        const textframe=await frame1?.getByText('This is a sample page').textContent();
        // frame1?. 'daki soru işareti(chaining operator) bu frame'in tanımlı olduğunı kabul etmesini sağlıyor    
        expect(textframe).toBe('This is a sample page');

        
    });


});

test.describe('TestAutoationPractice IFrame', () => {
    
    test.beforeEach('BeforeEach', async({page}) => {
       await page.goto('https://testautomationpractice.blogspot.com/');
       await page.setViewportSize({width:1920,height:1080});
       await page.evaluate(()=>{window.scrollBy(0,800);});

    });

    test('Iframe Name', async({page}) => {
        const frame3=page.frame({url:'https://fs24.formsite.com/res/showFormEmbed?EParam=m_OmK8apOTDpwCqUlfXbL2rYe2Y6sJfY&796456169&EmbedId=796456169'})
        const name:string='Murat';
        await frame3?.locator('#RESULT_TextField-0').fill(name);
        expect(await frame3?.locator('#RESULT_TextField-0').inputValue()).toBe(name);

        
         
    });

    test('iframe Gender', async({page}) => {
        const frame3=page.frame({url:'https://fs24.formsite.com/res/showFormEmbed?EParam=m_OmK8apOTDpwCqUlfXbL2rYe2Y6sJfY&796456169&EmbedId=796456169'})
        
        //Iframe Gender
        const maleRadio=frame3?.getByText('Male').nth(0);
        await maleRadio?.check()
        expect(await maleRadio?.isChecked()).toBeTruthy();
        await page.waitForTimeout(3000);
    });

    test('iframe Date', async({page}) => {
        const frame3=page.frame({url:'https://fs24.formsite.com/res/showFormEmbed?EParam=m_OmK8apOTDpwCqUlfXbL2rYe2Y6sJfY&796456169&EmbedId=796456169'})
        
        let date:string='05/16/2024';
        const dateInput=frame3?.locator('#RESULT_TextField-2')
        await dateInput?.fill(date);

        expect(await dateInput?.inputValue()).toBe(date);
    });

   
    test('iframe Job', async({page}) => {
        const frame3=page.frame({url:'https://fs24.formsite.com/res/showFormEmbed?EParam=m_OmK8apOTDpwCqUlfXbL2rYe2Y6sJfY&796456169&EmbedId=796456169'})
        
        const dropDown=frame3?.locator('#RESULT_RadioButton-3');
        const selectedValue='Radio-0';

        await dropDown?.selectOption({value:selectedValue});

        expect(await dropDown?.inputValue()).toBe(selectedValue);
    });


});