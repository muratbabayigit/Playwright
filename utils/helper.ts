import {test,expect} from '@playwright/test';
import { faker } from '@faker-js/faker';
export function createBookingBody(){
    const bookingBody={
        firstname:"Murat",
        lastname:"Yiğit",
        totalprice:'1000',
        depositpaid: true,
        bookingdates : {
            checkin : "2025-01-01",
            checkout : "2025-02-01"
        },
        additionalneeds : "Breakfast"
    };
return bookingBody;
}

