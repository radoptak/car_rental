/// <reference types="cypress" />

import { searchPage } from "../support/page_objects/search_page"
import { searchResults } from "../support/page_objects/search_result_page"


describe("Tivix suite", () => {

    beforeEach("Before every test", () => {
        cy.visit('/')
    })

    it("First test", () => {

        searchPage.chooseCountry()
        searchPage.chooseCity()
        searchPage.setModel()
        searchPage.setStartDate()
        searchPage.setEndDate()
        searchPage.clickRentBtn()
        searchResults.checkResultsAreLoaded()
    })
})