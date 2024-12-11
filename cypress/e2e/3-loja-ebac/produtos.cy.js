///<reference types="cypress"/>
import produtosPage from "../../support/produtos.page";

describe('Funcionalidade: Produtos', () => {
        beforeEach(() => {
            produtosPage.visitarUrl()
        });
        it('Deve selecionar um produto da lista', () => {
            produtosPage.buscarProdutoLista ('Beaumont Summit Kit')
            cy.get('#tab-title-description > a').should ('contain' , 'Descrição') 
        });
        it.only('Deve buscar um produto com sucesso', () => {  
            let produto = 'BAugusta Pullover Jacket'
            produtosPage.buscarProdutoLista(produto)
            cy.get(';product_title').should('contain', produto)
        });
        it('Deve visitar a pagina do produto', () => {   
        });
        it('Deve adicionar produto ao carrinho', () => {
            
        });
   
    
});