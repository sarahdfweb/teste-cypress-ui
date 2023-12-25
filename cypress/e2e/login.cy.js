/// <reference types="cypress" />

context('Funcionalidade Login', () =>{

    before(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    afterEach(() => {
       cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('sarahdfweb@gmail.com')
        cy.get('#password').type('Yehoshua1@')
        cy.get('.woocommerce-form > .button').click();
        cy.get('.page-title').should('exist' , 'minha conta').wait(1000);
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist' , 'Olá, sarahdf').wait(1000);
 
    });

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('sarahdfweb@gmail.com1')
        cy.get('#password').type('Yehoshua1@')
        cy.get('.woocommerce-form > .button').click();
        cy.get('.page-title').should('exist' , 'minha conta').wait(1000);
        cy.get('.woocommerce-error').should('exist' , 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.').wait(1000);
        
    });

    it.only('Deve exibir uma mensagem de erro senha inválido  ', () => {
        cy.get('#username').type('sarahdfweb@gmail.com')
        cy.get('#password').type('yehoshua')
        cy.get('.woocommerce-form > .button').click();
        cy.get('.page-title').should('exist' , 'minha conta').wait(1000);
        cy.get('.woocommerce-error').should('exist' , 'Erro: A senha fornecida para o e-mail sarahdfweb@gmail.com está incorreta. Perdeu a senha?').wait(1000);

    });
    
});
