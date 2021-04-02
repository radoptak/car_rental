export class SummaryPage {
  checkPageHeader() {
    cy.get("h2").should("contain", " Summary:");
  }

  clickRentBtn() {
    cy.get('[type="submit"]').click();
  }
}

export const summaryPage = new SummaryPage();
