import DateHelper from "../../../helpers/DateHelper";
import { addedDays } from "../../../consts";

export class SearchPage {
  confirmPageTitle() {
    cy.visit("/");
    cy.title().should("eq", "Car rent");
  }

  chooseCountry(country) {
    cy.get("#country").select(country);
  }

  chooseCity(city) {
    cy.get("#city").select(city);
  }

  setModel(carModel) {
    cy.get("#model").type(carModel);
  }

  setStartDate() {
    const date = DateHelper.getDatePlusDays(addedDays.startDate);
    cy.get("#pickup").type(DateHelper.dateToString(date));
  }

  setEndDate() {
    const date = DateHelper.getDatePlusDays(addedDays.endDate);
    cy.get("#dropoff").type(DateHelper.dateToString(date));
  }

  setInvalidEndDate() {
    const date = DateHelper.getDatePlusDays(addedDays.invalidEndDate);
    cy.get("#dropoff").type(DateHelper.dateToString(date));
  }

  clickSearchBtn() {
    cy.contains("button", "Search").click();
  }
}

export const searchPage = new SearchPage();
