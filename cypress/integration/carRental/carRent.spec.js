/// <reference types="cypress" />

import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";
import { searchPage } from "../../support/page_objects/search_page";
import { searchResults } from "../../support/page_objects/search_result_page";
import { preliminarySummary } from "../../support/page_objects/preliminary_summary_page";
import { summaryPage } from "../../support/page_objects/summary_page";
import { paymentPage } from "../../support/page_objects/payment_page";

Given("I serch for the desired car", () => {
  searchPage.confirmPageTitle();
  searchPage.chooseCountry("Poland");
  searchPage.chooseCity("Cracow");
  searchPage.setModel("Suzuki Swift");
  searchPage.setStartDate();
  searchPage.setEndDate();
  searchPage.clickSearchBtn();
});

And("I pick the car", () => {
  searchResults.pickTheCar();
});

And("I confirm the choice", () => {
  preliminarySummary.checkRentStartDate();
  preliminarySummary.checkRentEndDate();
  preliminarySummary.clickRentBtn();
});

Then("I should be on the Summary page", () => {
  summaryPage.checkPageHeader();
});

When("I fill required input fields", (datatable) => {
  datatable.hashes().forEach((element) => {
    cy.get("#name").type(element.name);
    cy.get("#last_name").type(element.lastName);
    cy.get("#card_number").type(element.cardNumber);
    cy.get("#email").type(element.email);
  });
});

And("I click Rent to confirm", () => {
  summaryPage.clickRentBtn();
});

Then("I should get payment confirmation", () => {
  // placeholder code since there is no actual page for this view
  paymentPage.checkPageHeader();
  paymentPage.checkPriceDetails();
  paymentPage.checkCarModel();
  paymentPage.checkDates();
});
