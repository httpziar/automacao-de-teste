///<reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')
describe('Funcionalidade: Login', () => {
    beforeEach(() => {
        cy.visit ('minha-conta')
     });
     afterEach(() => {
        cy.screenshot()
     });
     it ('Deve fazer login com sucesso', () => {
        cy.get('#username').type('elisiarQA@teste.com.br')
        cy.get('#password').type('CGHXjcr2qmHjyLe')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ( 'contain' , 'Olá, elisiarqa (não é elisiarqa? Sair)' )
    })  
    it('Deve exibir uma mensagem de erro ao inserir usuario invalido', () => {
        cy.get('#username').type('eliQA@teste.com.br')
        cy.get('#password').type('CGHXjcr2qmHjyLe')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should ('contain' , 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.' )
    });
    it('Deve exibir uma mensagem de erro ao inserir senha invalida', ()=> {
        cy.get('#username').type('elisiarQA@teste.com.br')
        cy.get('#password').type('CGHXjcr2qmHfjyLe')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should ('contain' , 'Erro: A senha fornecida para o e-mail elisiarQA@teste.com.br está incorreta. Perdeu a senha?' )  
    });

    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ( 'contain' , 'Olá, elisiarqa (não é elisiarqa? Sair)' )
        
    });
it.only('Deve fazer login com sucesso usando comando customizados', () => {
    cy.login ('elisiarQA@teste.com.br', 'CGHXjcr2qmHjyLe')
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ( 'contain' , 'Olá, elisiarqa (não é elisiarqa? Sair)' )

});
});