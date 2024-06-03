describe("api testing", ()=> {

    it("Approach1- Hard coded json object", ()=>{

        const requestBody={
                id: 1,
                category : {
                    id: 1,
                    name: "Husky"
                },
                    name: "Bobby",
                    photoUrls : [
                        "string"
                    ],
                tags : [
                        {
                        id : 1,
                        name : "Booby"
                    }
                ],
                    status : "available"
        }
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/pet' ,
            body: requestBody
        })
        .then( (response) => {
            expect(response.status).to.eq(200)
            expect(response.body.category.name).to.eq("Husky")
            expect(response.body.name).to.eq("Bobby")
            expect(response.body.tags[0]["name"]).to.eq("Booby")
        })
    })

    it("Approach2- Dynamically generating json object", ()=>{

        const requestBody={
            id: 1,
                category : {
                    id: 1,
                    name: "Husky" + Math.random().toString(5).substring(2)
                },
                    name: "Bobby" + Math.random().toString(5).substring(2),
                    photoUrls : [
                        "string"
                    ],
                tags : [
                        {
                        id : 1,
                        name : "Booby" + Math.random().toString(5).substring(2)
                    }
                ],
                    status : "available"
        }
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/pet' ,
            body: requestBody
        })
        .then( (response) => {
            expect(response.status).to.eq(200)
            expect(response.body.category.name).to.eq(requestBody.category.name)
            expect(response.body.name).to.eq(requestBody.name)
            expect(response.body.tags[0]["name"]).to.eq(requestBody.tags[0]["name"])
        })
    })

    it("Approach3- using fixture", ()=>{
        cy.fixture('petstore').then((data)=> {
            const requestBody = data;
            cy.request({
                method: 'POST',
                url: 'https://petstore.swagger.io/v2/pet' ,
                body: requestBody
            })
            .then( (response) => {
                expect(response.status).to.eq(200)
                expect(response.body.category.name).to.eq(requestBody.category.name)
                expect(response.body.name).to.eq(requestBody.name)
                expect(response.body.tags[0]["name"]).to.eq(requestBody.tags[0]["name"])
            })
        })
    })
})