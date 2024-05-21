import{test,expect} from '@playwright/test';

test.describe('Get API Test', () => {

    test('GetBookingIds', async({request}) => {

        const response=await request.get('/booking');
        const body=await response.json();
        console.log(body)
    
        expect(response.status()).toBe(200);
        expect(body.length).toBeGreaterThan(0);
        expect(body[3]).toHaveProperty('bookingid');
        expect(typeof body[28].bookingid).toBe('number')
        
    });

    test('getBookingId', async({request}) => {
        const response=await request.get('/booking/68')
        const body=await response.json();
        console.log(body);
        expect(response.status()).toBe(200);
        expect(body.firstname).toBe('John');
        expect(body.lastname).toBe('Smith');
        expect(body.totalprice).toBe(111);
        expect(body.depositpaid).toBe(true);
        expect(body.bookingdates.checkin).toBe('2018-01-01');


        
    });


    
});