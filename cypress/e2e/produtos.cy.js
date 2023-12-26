// Listas e variáveis 

/// <reference types="cypress"/>

describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
        
    });
        // teste trabalhando com lista
    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block ').first().click()
        //.eq(3).click() pega o 4° elemento
        //.contains('Abominable Hoodie') pega determinado produto

    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 3
        cy.get('.post-2559 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)
        cy.get('.woocommerce-message').should('exist' , quantidade + ' “Abominable Hoodie” foi adicionado no seu carrinho. ')
        
        
    });
    
});