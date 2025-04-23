/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe ('Funcionalidade: Login' , () =>  {

        beforeEach(() => {
            cy.visit ('minha-conta/edit-account')
        });

        afterEach(() => {
            cy.screenshot()
        });

    it ('Deve fazer Login com sucesso' , ()  => {
        cy.get('#username').type ('celio.teste@teste.com.br')
        //cy.get('#username').type (login.usuario)
        cy.get('#password').type ('teste@1234')
        //cy.get('#password').type (login.senha)
        cy.get('.woocommerce-form > .button').click ()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, celio.teste (não é celio.teste? Sair)')
    })


    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type ('celio.teste@teste.com.br')
        cy.get('#password').type ('teste@123')
        cy.get('.woocommerce-form > .button').click ()

        cy.get('.woocommerce-error >li '). should ('contain', 'Olá, celio.teste (não é celio.teste? Sair)')
        cy.get('.woocommerce-error >li'). should ('exist')
        
    });

    it('Deve exibir uma mensagem de erro ao inserir senha invalida ', () => {}
)

    it('Deve exibir uma mensagem de erro ao inserir uma senha inválida', () => {
    cy.get('#username').type ('celio@teste.com.br')
    cy.get('#password').type ('teste@12345')
    cy.get('.woocommerce-form > .button').click ()
    
    cy.get('.woocommerce-error >li '). should ('exist')
    
});
    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type (perfil.usuário)
        cy.get('#password').type (perfil.senha)
        cy.get('.woocommerce-form > .button').click ()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, celio.teste (não é celio.teste? Sair)')
       
       
});
    it('Deve fazer login com sucesso - Usando Fixture', () => {
        cy.fixture('perfil').then (dados => {
            cy.get('#username').type (dados.usuario, {log:false})
            cy.get('#password').type (dados.senha, {log:false})
            cy.get('.woocommerce-form > .button').click ()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, celio.teste (não é celio.teste? Sair)')
         
        })

        it.only('Deve fazer login com sucesso - usando Comandos Customizados', () => {
            //cy.login('celio.teste@teste.com.br', 'teste@1234')
            cy.login(login.usuario, login.senha)  
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, celio.teste (não é celio.teste? Sair)')
       
            
        });

    });

});