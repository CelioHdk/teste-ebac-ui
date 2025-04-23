/// <reference types= "cypress"/>
    import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    
        beforeEach(() => {
            produtosPage.visitarUrl()
        });

        it('Deve selecionar um produto da lista', () => {
            produtosPage.buscarProdutoLista('Bruno Compete Hoodie')                      
            cy.get ('#tab-title-description > a').should('contain', 'Descrição')     
    
            
        });

        it('Deve buscar um produto com sucesso', () => {
            let produto = 'Aether Gym Pant'
            produtosPage.buscarProduto(produto)
            cy.get('.product_title').should('contain', produto)

        });

        it('Deve visitar a pagina do produto', () => {
            produtosPage.visitarProduto('Thorpe Track Pant')
            cy.get('.product_title').should('contain', 'Thorpe Track Pant')

        } );

        it('Deve adicionar produto ao carrinho', () => {
            let qtd = 18
            produtosPage.buscarProduto('Ajax Full-Zip Sweatshirt')
            produtosPage.addProdutoCarrinho('L', 'Green', qtd)

            cy.get('.woocommerce-message').should('contain', qtd + ' ×  “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')

        });

        it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
            cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[2].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[2].tamanho,
                dados[2].cor, 
                dados[2].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[2].nomeProduto)

            })            

        });

});