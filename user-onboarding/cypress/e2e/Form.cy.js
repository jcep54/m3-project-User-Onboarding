describe('Testing form functionality',function(){
    beforeEach(() =>{
        cy.visit('http://localhost:3000')
    })
    it('adds text to name input', function(){
        cy.get("input[name=username]")
        .type('test')
        .should('have.value','test')
    })
    it('gets email and types address', () => {
        cy.get('input[name=email]')
        .type('jose@cep.com')
        .should('have.value','jose@cep.com')
    })
    it('gets password and types in it', () => {
        cy.get('input[name=password]')
        .type(`you'llneverhackme`)

    })
    it('user can check terms of service box', () => {
        cy.get('input[name=terms]')
        .click()
        .should('have.value','on')
    })
    it('user can submit form', () => {
        cy.get('input[type=submit]')
        .click()
    })










})