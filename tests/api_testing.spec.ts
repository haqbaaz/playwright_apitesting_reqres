import { test, expect, request } from '@playwright/test';


test.describe.serial("api requests", () => {

    var userId: number;


    test('api Request', async ({ request }) => {

        const res = await request.get('/public/v2/users/', {


        })
        console.log(await res.json())
        console.log(await res.status())
        await expect(res.status()).toBe(200)
    })

    test('post api', async ({ request }) => {

        const response = await request.post('/public/v2/users/', {


            data: {
                name: process.env.NAME,
                gender: process.env.GENDER,
                email: process.env.EMAIL,
                status: process.env.STATUS
            },

        })

        console.log(await response.json())
        console.log(await response.status())
        const postData = await response.json();
        userId = postData.id;

        console.log(userId);
        await expect(response.status()).toBe(201)


    })

    test('geting users', async ({ request, }) => {

        const res = await request.get(`/public/v2/users/${userId}`, {
        })

        console.log(await res.json())
        console.log(await res.status())
        await expect(res.status()).toBe(200)
    })

    test('deleting user', async ({ request, }) => {

        const res = await request.delete(`/public/v2/users/${userId}`, {

        })

        console.log(await res.status())
        await expect(res.status()).toBe(204)
    })

    test('geting user', async ({ request, }) => {

        const res = await request.get(`/public/v2/users/${userId}`, {
        })

        console.log(await res.json())
        console.log(await res.status())
        await expect(res.status()).toBe(404)
    })


})
