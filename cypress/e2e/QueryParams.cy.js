describe("API testing", ()=> {


    const queryParam={ page:1 };

    it("Passing Query parameters", ()=>{

        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users',
            qs: queryParam
        })
        .then( (response) => {
            expect(response.status).to.eq(200);
            expect(response.status).equal(200);
            expect(response.body.page).to.eq(1);
            expect(response.body.data).has.length(6);
            expect(response.body.data[1]).have.property('id',2);
            expect(response.body.data[1]).have.property('first_name', 'Janet');
        })

    })


})