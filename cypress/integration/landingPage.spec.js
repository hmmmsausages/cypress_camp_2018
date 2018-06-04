describe('Landing Page', function () {

    beforeEach(() => {
        cy.visit('https://www.zuehlke.com/gb/en/')
    });

    it('Opens landing page', () => {
        cy.contains("The Future Face of Artificial Intelligence")
    });

    it('Navigate to some recent projects page', () => {
        cy.contains("Some recent projects").click();

        cy.url().should('be', 'https://www.zuehlke.com/gb/en/success-stories/')
    });

    it('Navigate to solutions page', () => {
        cy.get('footer').contains("Solutions").scrollIntoView().click();

        cy.url().should('include', 'https://www.zuehlke.com/gb/en/solutions/')
    });

    it('Search', () => {
        cy.get('#mob-nav-toggler')
            .click()
            .get('#side-search > form > .main-search-input')
            .type('Digital Transformation of HSBC{enter}');

        cy.get('.search-entry').should('not.be.empty');
        cy.get('.search-entry').contains('Digital Transformation of HSBC');
    })
});
