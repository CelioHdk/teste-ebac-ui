///<reference types="cypress" />

describe('Funcionalidade: Detalhes da Conta', () => {

    beforeEach(() => {            
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(login => {
           cy.login(login.usuario, login.senha)
           //cy.login('celio.teste@teste.com.br' , 'teste@1234')

        });
    });

    it('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('Celio', 'Sinobu', 'celio.qa')
         cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')


    }); 

    });