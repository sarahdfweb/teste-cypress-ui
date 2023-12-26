class ProdutosPage {

    visitarUrl() {
        cy.visit('produtos')
    
    }
buscarProduto(nomeProduto) {
    cy.get('[name="s"]').eq(1).type(nomeProduto).click()
    cy.get('.button-seach').eq(1).click()
    }
    

buscarProdutoLista(nomeProduto) {
    cy.get('.products > .row')
    .contains(nomeProduto)
    .click()

    }

visitarProduto(nomeProduto) {
    cy.visit(`:produto/${nomeProduto}`)
 
    }

addProdutoCarrinho(tamanho, cor, quantidade) {
   // cy.get('.button-variable-item-' + tamanho).click()
   // cy.get('.button-variable-item-' + cor).click()
   // cy.get('.input-text').clear().type(quantidade)
    //cy.get('.single_add_to_cart_button').click()

    cy.get(`.button-variable-item-${tamanho}`).should('exist').click();
    cy.get(`.button-variable-item-${cor}`).should('be.visible').click();
    cy.get('.input-text').should('exist').clear().type(quantidade);
    cy.get('.single_add_to_cart_button').should('be.visible').click();

    }
}
export default new ProdutosPage()
