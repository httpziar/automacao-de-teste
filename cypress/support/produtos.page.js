class ProdutosPage {
    visitarUrl () {
        cy.visit('Produtos')
    }
    buscarProduto () {

    }  
buscarProdutoLista(nomeProduto) { 
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get ('.button-search').eq(1).click()
        .click()  
}   

visitarProduto()  {
}
addProdutoCarrinho() {
}
}
export default new ProdutosPage()
