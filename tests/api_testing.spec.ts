import { test, expect, request } from '@playwright/test';



test('api Request', async ({ request }) => {

    const res = await request.get('https://gorest.co.in/public/v2/users/', {

        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer eecb7be28699026ccb5c0b804b9408687cdf28b2ea1d8f530145a6cd4e180a60`
        }

    })
    console.log(await res.json())
    console.log(await res.status())
    await expect(res.status()).toBe(200)
})

// test.describe.serial("api requests", () => {

//     var userId: number;
//     const token = process.env.API_TOKEN || 'eecb7be28699026ccb5c0b804b9408687cdf28b2ea1d8f530145a6cd4e180a60';
//     const baseURL = process.env.BASE_URL || 'https://gorest.co.in';

//     const headers = {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'Authorization': `Bearer ${token}`
//     };

//     test('api Request', async ({ request }) => {

//         const res = await request.get('/public/v2/users/', {

//             headers: headers

//         })
//         console.log(await res.json())
//         console.log(await res.status())
//         await expect(res.status()).toBe(200)
//     })

//     test('post api', async ({ request }) => {

//         const response = await request.post('/public/v2/users/', {

//             headers: headers,
//             data: {
//                 name: process.env.NAME,
//                 gender: process.env.GENDER,
//                 email: process.env.EMAIL,
//                 status: process.env.STATUS
//             },

//         })

//         console.log(await response.json())
//         console.log(await response.status())
//         const postData = await response.json();
//         userId = postData.id;

//         console.log(userId);
//         await expect(response.status()).toBe(201)


//     })

//     test('geting users', async ({ request, }) => {

//         const res = await request.get(`/public/v2/users/${userId}`, {
//             headers: headers
//         })

//         console.log(await res.json())
//         console.log(await res.status())
//         await expect(res.status()).toBe(200)
//     })

//     test('deleting user', async ({ request, }) => {

//         const res = await request.delete(`/public/v2/users/${userId}`, {
//             headers: headers

//         })

//         console.log(await res.status())
//         await expect(res.status()).toBe(204)
//     })

//     test('geting user', async ({ request, }) => {

//         const res = await request.get(`/public/v2/users/${userId}`, {
//             headers: headers
//         })

//         console.log(await res.json())
//         console.log(await res.status())
//         await expect(res.status()).toBe(404)
//     })


// })
