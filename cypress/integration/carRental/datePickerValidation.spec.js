/// <reference types="cypress" />

import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";
import { searchPage } from "../../support/page_objects/search_page";
import { searchResults } from "../../support/page_objects/search_result_page";

Given("I selected country, city and model", () => {
  searchPage.confirmPageTitle();
  searchPage.chooseCountry("France");
  searchPage.chooseCity("Paris");
  searchPage.setModel("Mazda 3");
});

When("I set invalid rental dates", () => {
  searchPage.setStartDate();
  searchPage.setInvalidEndDate();
  searchPage.clickSearchBtn();
});

Then("I should get error message asking me to enter vali date", () => {
  searchResults.invalidDateErrorMsg();
});
