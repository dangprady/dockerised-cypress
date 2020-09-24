Feature: Check product details page

  One can check listed product details
  
  Scenario: Visit Product page on Local Website
    Given You visit local website
    And You select Shared project
    And You goto Product Catalog
    And You select product 
    Then You see product details