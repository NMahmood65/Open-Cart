import { test, expect } from '@playwright/test'

test('Assert response status', async ({request}) => {
    const response = await request.get(`https://reqres.in/api/users/2`)
    expect(response.status()).toBe(200)
    //const responseBody = JSON.parse(await response.text())
    //console.log(responseBody)
})