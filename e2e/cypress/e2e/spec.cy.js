describe('Newsletter', () => {

    beforeEach(() => {
        cy.visit('https://www.jet.de/newsletter')
    });

    it('background color falsch', () => {
        cy.get('body').should('have.css', 'background-color', 'rgb(12, 22, 33)')
    });

    it('background color richtig', () => {
        cy.get('body').should('have.css', 'background-color', 'rgb(252, 248, 240)')
    });

});