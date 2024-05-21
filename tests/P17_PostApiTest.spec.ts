import {test,expect} from '@playwright/test';
import { createBookingBody } from '../utils/helper';

test.describe('Post Api Tests', () => {
    

    test('Post Api Test 1', async({request}) => {
        const response=await request.post('/booking',{
            data: {
                firstname : "Murat",
                lastname : "Babayiğit",
                totalprice : 7171,
                depositpaid : true,
                bookingdates : {
                    checkin : "2025-01-01",
                    checkout : "2025-02-01"
                },
                additionalneeds : "Breakfast",
            },
        });

        const body=await response.json();
         console.log(await body);

         expect(response.status()).toBe(200);
         expect(body.booking.firstname).toBe('Murat')
         expect(body.booking.lastname).toBe('Babayiğit')
         expect(body.booking.totalprice).toBe(7171)
         expect(body.booking.depositpaid).toBe(true)  
    });

    test('Post APi test ve function', async({request}) => {
        const bookingBody=createBookingBody();
        const firstName=bookingBody.firstname;
        const lastName=bookingBody.lastname

            const response=await request.post('/booking',{
                data: bookingBody,
            });

            const body=await response.json();

            expect(response.status()).toBe(200);
            expect(body.booking.firstname).toBe(firstName);
            expect(body.booking.lastname).toBe(lastName);
            expect(body.booking.totalprice).toBe(1000);
            expect(body.booking.depositpaid).toBe(bookingBody.depositpaid);
            expect(body.booking.additionalneeds).toBe(bookingBody.additionalneeds);
            expect(body.booking.bookingdates.checkin).toBe('2025-01-01');
            expect(body.booking.bookingdates.checkout).toBe('2025-02-01');
        
    });
});