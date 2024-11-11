///<reference types="cypress"/>

describe('Funcionalidade: Login', () => {
    
    it ('Deeve fazeer login com sucesso', () => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
        cy.get('#username').type('elisiarQA@teste.com.br')
        cy.get('#password').type('CGHXjcr2qmHjyLe')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ( 'contain' , 'Olá, elisiarqa (não é elisiarqa? Sair)' )
    })  
})