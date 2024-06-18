describe("Parsing JSON Response", () => {

    it("Parsing simple JSON response", () => {

        cy.request({
            method : 'GET',
            url : "https://fakestoreapi.com/products",
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body[1].id).to.equal(2)
            expect(response.body[1].title).to.equal("Mens Casual Premium Slim Fit T-Shirts ")
            expect(response.body[1].price).to.equal(22.3)
            expect(response.body[1].rating.rate).to.equal(4.1)
        })
    })

    it.only("Parsing complex JSON response", () => {

        let totalprice = 0;
        cy.request({
            method : 'GET',
            url : "https://fakestoreapi.com/products",
            qs : {limit:7}
        }).then((response) => {
            expect(response.status).to.equal(200)

            response.body.forEach(element => {
                totalprice = totalprice + element.price;
            });
            expect(totalprice).to.equal(1077.22); //limit 7

        })
    })

})