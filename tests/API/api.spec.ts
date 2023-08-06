import { test, expect } from '@playwright/test'

test.describe.parallel ('api testing', () =>{
    const baseUrl = 'https://reqres.in/api'

    test.only('Assert response status', async ({request}) => {
        const response = await request.get(`${baseUrl}/users/2`)
        expect(response.status()).toBe(200)
        const responseBody = JSON.parse(await response.text())
        console.log(responseBody)
    })

    test('Assert invalid endpoint', async ({request}) => {
        const response = await request.get(baseUrl + '/users/nieoneo')
        expect(response.status()).toBe(404)
    })

    test('GET - check user data', async ({request}) => {
        const response = await request.get(baseUrl + '/users/1')
        const responseBody = JSON.parse(await response.text())
        console.log(responseBody)
        expect(response.status()).toBe(200)
        expect(responseBody.data.id).toBe(1)
        expect(responseBody.support.url).toBeTruthy
        expect(responseBody.data.first_name).toBe('George')
        expect(responseBody.data.last_name).toBe('Bluth')
    })

    test('POST - create new user', async ({request}) => {
        const response = await request.post(baseUrl + '/users', {
            data:{
                id: 9000,
                first_name: 'NaserSMAbcde',
            },
        })
        const responseBody = JSON.parse(await response.text())
        console.log(responseBody)
        expect(responseBody.id).toBe(9000)
        expect(responseBody.first_name).toBe('NaserSMAbcde')
        expect(responseBody.createdAt).toBeTruthy()
    })

    test('POST -login success', async ({request}) => {
        const response = await request.post(baseUrl + '/login', {
            data:{
                email: 'eve.holt@reqres.in',
                password: 'cityslicka',
            },
        })
        expect(response.status()).toBe(200)
        const responseBody = JSON.parse(await response.text())
        expect(responseBody.token).toBeTruthy()
    })

    test('POST -login fail', async ({request}) => {
        const response = await request.post(baseUrl + '/login', {
            data:{
                email: 'peter@klaven',
            },
        })
        expect(response.status()).toBe(400)
        const responseBody = JSON.parse(await response.text())
        expect(responseBody.error).toBe('Missing password')
        console.log(responseBody)
    })

    test('PUT - update user info', async ({request}) => {
        const response = await request.put(baseUrl + '/users/2', {
            data:{
                name: 'morpheus',
                job: 'software engineer',
            },
        })
        expect(response.status()).toBe(200)
        const responseBody = JSON.parse(await response.text())
        expect(responseBody.updatedAt).toBeTruthy
        console.log(responseBody)
    })

    test('DELETE - user', async ({request}) => {
        const response = await request.delete(baseUrl + '/users/2')
        expect(response.status()).toBe(204)
    })

    test.only('GET - check user data2', async ({request}) => {
        const response = await request.get('https://danube-web.shop/api/books')
        const responseBody = JSON.parse(await response.text())
        console.log(responseBody)
        // expect(response.status()).toBe(200)
        // expect(responseBody.data.id).toBe(1)
        // expect(responseBody.support.url).toBeTruthy
        // expect(responseBody.data.first_name).toBe('George')
        // expect(responseBody.data.last_name).toBe('Bluth')
    })
})