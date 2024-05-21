import {test,expect} from '@playwright/test';
import { createBookingBody } from '../utils/helper';
let bookingid;
test.beforeAll(async({request})=>{
    const postBody=createBookingBody();

    const response=await request.post('/booking',{
        data:postBody
    });
    const body=await response.json();
    bookingid=body.bookingid;
    })

    const putBody={
            firstname: "testing",
            lastname: "Testing",
            totalprice: 2828,
            depositpaid: false,
            bookingdates: {
              checkin: "2025-08-01",
              checkout: "2025-09-01"
            },
            additionalneeds: "Breakfast"
    }

    test('Put Api Test', async({request}) => {

        const putResponse=await request.put(`/booking/${bookingid}`,{
            data:putBody,
            headers:{
                Authorization:'Basic YWRtaW46cGFzc3dvcmQxMjM='
            }
        });

        const body=await putResponse.json();

        expect(body.firstname).toBe(putBody.firstname)
        expect(body.lastname).toBe(putBody.lastname)
        expect(body.totalprice).toBe(putBody.totalprice)
        expect(body.depositpaid).toBe(putBody.depositpaid)
        
    });
