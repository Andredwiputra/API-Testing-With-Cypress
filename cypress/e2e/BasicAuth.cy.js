describe("Authentication",()=>{
    it("Basic Authentication", ()=>{
        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            auth:{
                user: 'postman',
                pass: 'password'
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.authenticated).to.eq(true)
        })
    })

    it("Digest Authentication", ()=>{
        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            auth:{
                username: 'postman',
                password: 'password',
                method: 'degest'
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.authenticated).to.eq(true)
        })
    })

    const token = '...' //bearer token
    it("Bearer Token Auth", ()=>{
        cy.request({
            method: 'GET',
            url: '.....', //api url
            headers:{
                Authorization: 'Bearer '+token
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
        })
    })

    it("API key Auth", () => {
        cy.request({
            method: "GET",
            url: "...." //API url
            qs:{
                appid: '....' //API key and value
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
        })
    })



})