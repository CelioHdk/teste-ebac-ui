/// <reference types="cypress"/>

describe ('Funcionalidade: Login' , () =>  {

    it ('Deve fazer Login com sucesso' , ()  => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type ('celio.teste@teste.com.br')
        cy.get('#password').type ('teste@1234')
        cy.get('.woocommerce-form > .button').click ()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, celio.teste (não é celio.teste? Sair)')
    })

})