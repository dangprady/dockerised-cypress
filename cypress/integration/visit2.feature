Feature: Submit a Claim

  Claimant want to submit a claim in UK Appliance Cashback
  
  @reg @smoke
  Scenario: Claimant submit a successful claim
    Given Claimant open Insyt promotion page
    And Claimant select "UK" region
    And Claimant select "Appliance Cashback" promotion
    And Claimant Click on Claim Now
    And Claimant accept terms
    Then Claimant see claim form

    Given Claimant enters personal details
    | Email | Title | FirstName | LastName | Phone | DOB |
    | p@g.com | Mr | Pradeep | Kumar | 9890989089 | 02 Aug 2002 |

    And Claimant Press Next
    Then Claimant see product selection page

    Given Claimant select purchased product "Washing Machine"
    And Claimant enter a random imei number
    And Claimant enter "40" as product price
    Then Add Product
    And Claimant Press Next for retailers page
    Then Claimant Select the retailer "Michael's Test Store"
    And Claimant Press Next to enter date of purchase
    
    Given Claimant enter date of purchase as "16 Aug 2020"
    Then Claimant Press Next to upload documents to prove purchase
    
    Given Upload document "pbox-1.pdf"
    And Claimant Press Next to enter address
    
    Given Claimant Enter pin "345" and address
    And Claimant enters bank details
    | Name | Type | SortCode | AccNo |
    | Pradeep | Person | 50-40-30 | 12389098 |
    Then Claimant Submit Claim

    


