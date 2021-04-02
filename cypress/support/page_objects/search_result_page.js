export class SearchResultPage {

    checkResultsAreLoaded() {
        cy.get('tbody').contains('tr', 'td').then(tableRow => {
            cy.wrap(tableRow).find('td').eq(5).should('contain', 'Rent')
        })
    }

    invalidDateErrorMsg() {
        cy.get('h3').invoke('text').then(errorTxt => {
            expect(errorTxt).to.equal('Please enter a valid date!')
        })
    }

    pickTheCar() {
        cy.get('tbody').contains('tr', 'Suzuki Swift').first().then(carRow => {
            cy.wrap(carRow).find('.btn-success').click()
        })
    }


}

export const searchResults = new SearchResultPage()