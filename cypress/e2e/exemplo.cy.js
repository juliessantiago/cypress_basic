describe('Login', () => {
    it('login_sucesso', () => {
        //acessar aplicação: 
        cy.visit('http://automationpratice.com.br/')
        //encontrar elemento na página aberta
            .get('#top_header')
        //preencher campo 
        cy.get('.form-control')
            .type('dudu@qazando.com.br')
        //clicar em botão 
        cy.get('.clear .theme-btn-one.btn_md')
            .click()
        
    })
})