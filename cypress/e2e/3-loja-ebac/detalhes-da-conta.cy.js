/// <reference types= "cypress" />
describe('Funcionalidade: Detalhes da conta',  () => {
    beforeEach(() => {
       cy.visit('minha-conta/edit-account/')
       cy.login('elisiarQA@teste.com.br', 'CGHXjcr2qmHjyLe' )
    });
    it('Deve completar detalhes da conta com sucesso')
});