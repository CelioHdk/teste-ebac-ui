/// <reference types="cypress"/>

describe ('Funcionalidade: Login' , () =>  {

        beforeEach(() => {
            cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        });

        afterEach(() => {
            cy.screenshot()
        });

    it ('Deve fazer Login com sucesso' , ()  => {
        cy.get('#username').type ('celio.teste@teste.com.br')
        cy.get('#password').type ('teste@1234')
        cy.get('.woocommerce-form > .button').click ()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, celio.teste (não é celio.teste? Sair)')
    })


    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type ('celio@teste.com.br')
        cy.get('#password').type ('teste@1234')
        cy.get('.woocommerce-form > .button').click ()

        cy.get('.woocommerce-error > li'). should ('contain', 'Endereço de e-mail desconhecido. ')
        cy.get('.woocommerce-error > li'). should ('exist')
        
    });

    it('Deve exibir uma mensagem de erro ao inserir senha invalida ', () => {}
)

    it('Deve exibir uma mensagem de erro ao inserir uma senha inválida', () => {
    cy.get('#username').type ('celio.teste@teste.com.br')
    cy.get('#password').type ('teste@1234')
    cy.get('.woocommerce-form > .button').click ()

    //cy.get('.woocommerce-error > li'). should ('contain', 'Erro: A senha fornecida para o e-mail celio.teste@teste.com.br está incorreta. Perdeu a senha?') 
    cy.get('.woocommerce-error > li'). should ('exist')
    
});
})

