describe('Testing form functionality',function(){
    beforeEach(() =>{
        cy.visit('http://localhost:3000')
    })
    it('adds text to name input', function(){
        cy.get("input[name=username]")
        .type('daddy')
        .should('have.value','daddy')
    })









})