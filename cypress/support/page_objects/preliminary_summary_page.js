import { addedDays } from "../../../consts";
import DateHelper from "../../../helpers/DateHelper";

export class PreliminarySummaryPage {
  checkRentStartDate() {
    const date = DateHelper.getDatePlusDays(addedDays.startDate);
    const formattedDate = DateHelper.dateToString(date);
    cy.get(".card-body")
      .find("h6")
      .eq(0)
      .invoke("text")
      .should("eq", " Pickup date: " + formattedDate);
  }

  checkRentEndDate() {
    const date = DateHelper.getDatePlusDays(addedDays.endDate);
    const formattedDate = DateHelper.dateToString(date);
    cy.get(".card-body")
      .find("h6")
      .eq(1)
      .invoke("text")
      .should("eq", " Dropoff date: " + formattedDate);
  }

  clickRentBtn() {
    cy.contains("a", "Rent!").click();
  }
}

export const preliminarySummary = new PreliminarySummaryPage();
