describe("HTTP Requests",()=>{

    it("GET Call", ()=>{

        cy.request('GET', 'https://petstore.swagger.io/v2/store/inventory')
        .its('status')
        .should('equal', 200);
        
    })

    it("POST Call", ()=>{

        cy.request({
            method : 'POST',
            url : 'https://petstore.swagger.io/v2/pet',
            body : {
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
                 })
                    .its('status')
                    .should('equal', 200);
            })

    it("PUT Call", ()=> {
        cy.request ({

            method : 'PUT',
            url : 'https://petstore.swagger.io/v2/pet',
            body : {
                id: 1,
                category : {
                    id: 1,
                    name: "Husky"
                },
                    name: "Bobbybil",
                    photoUrls : [
                        "string"
                    ],
                    tags : [
                        {
                        id : 1,
                        name : "BoobyHana"
                    }
                 ],
                    status : "asleep"
            }
        })
        .its('status')
        .should('equal', 200);

    })

    it("DELETE Call", ()=>{

        cy.request({
            method : 'DELETE',
            url : 'https://petstore.swagger.io/v2/pet/1'
        })
        .its('status')
        .should('equal',200);

    })





})