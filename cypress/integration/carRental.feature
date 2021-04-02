Feature: Car renting

    I want to to be able to search and rent a desired car in a specified country and city.

    # imperative approach
    Scenario: Serching for a specific car model in specified country and city
        Given I am on the Search page
        When I set Contry to "France"
        And I set City to "Paris"
        And I set Model to "Mazda 3"
        And I choose starting date
        And I choose ending date
        When I click Search button
        Then I should see that results are loaded

    # declarative approach
    Scenario: Providing invalid date
        Given I selected country, city and model
        When I set invalid rental dates
        Then I should get error message asking me to enter vali date

    # mixed approach
    Scenario: renting a car
        Given I serch for the desired car
        And I pick the car
        And I confirm the choice
        Then I should be on the Summary page
        When I fill required input fields
            | name | lastName | cardNumber  | email        |
            | John | Doe      | 12398776587 | jd@gmail.com |
        And I click Rent to confirm
        Then I should get payment confirmation