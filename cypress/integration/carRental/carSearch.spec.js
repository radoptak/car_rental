/// <reference types="cypress" />

import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";
import { searchPage } from "../../support/page_objects/search_page";
import { searchResults } from "../../support/page_objects/search_result_page";

Given("I am on the Search page", () => {
  searchPage.confirmPageTitle();
});

When("I set Contry to {string}", (country) => {
  searchPage.chooseCountry(country);
});

And("I set City to {string}", (city) => {
  searchPage.chooseCity(city);
});

And("I set Model to {string}", (model) => {
  searchPage.setModel(model);
});

And("I choose starting date", () => {
  searchPage.setStartDate();
});

And("I choose ending date", () => {
  searchPage.setEndDate();
});

And("I click Search button", () => {
  searchPage.clickSearchBtn();
});

Then("I should see that results are loaded", () => {
  searchResults.checkResultsAreLoaded();
});
