Feature: Claim Submission

  I want to submit a claim as claimant
  
  @reg @smoke
  Scenario: Submit a claim as claimant
    Given I open Insyt promotion page
    When I Select UK region 
    And I Select Appliance Cashback promotion
    And I accept cookies
    And I Claim Now and accept terms
    Then I see Claim Form  