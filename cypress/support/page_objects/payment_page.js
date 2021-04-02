export class PaymentPage {

    checkPageHeader() {
        cy.get('h2').should('contain', ' Payment details:')
    }

    checkPriceDetails() {

    }

    checkCarModel() {

    }

    checkDates() {

    }

}

export const paymentPage = new PaymentPage()