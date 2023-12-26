// Listas e variáveis 

/// <reference types="cypress"/>
import produtosPage from "../support/page-objects/produtos.page";


describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
        
    });
        
    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Argus All-Weather Tank')
        cy.get('.product_title').should('contain' ,'Argus All-Weather Tank')
            



        //cy.get('.product-block ').first().click()
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

    //it.only('Deve buscar um produto com sucesso', () => {
        //let produto = 'Teton Pullover Hoodi'
        //produtosPage.buscarProduto(produto)
       // cy.get('.product_title').should('contain' , 'Teton Pullover Hoodie' )
        
        
    //});

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Zeppelin-Yoga-Pant')
        cy.get('.product_title').should('exist' , 'Zeppelin Yoga Pant')

        
    });
    
    it.only('Deve adicionar produto ao carrinho', () => {
        let qtd = 7
        produtosPage.visitarProduto('Circe-Hooded-Ice-Fleece')
        produtosPage.addProdutoCarrinho('M', 'Purple', qtd)

        cy.get('.woocommerce-message').should('contain' , qtd + ' × “Circe Hooded Ice Fleece” foram adicionados no seu carrinho.')
        
    });
    
})


