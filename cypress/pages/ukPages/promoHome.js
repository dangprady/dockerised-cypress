
export default class promoHome {

    claimNow = "a[href='/appliance/gb/en/claims-page']";
    startClaim = "i.fa.fa-check.btn-check-add-icon"
    termsCheckBox = "label.radiocheck"


    xapplianceCashback = "//h5[contains(text(),'Appliance Cashback')]/following-sibling::*";


    pressClaimNow(){
        cy.get(this.claimNow).click({ multiple: true, force: true })
        
    }

    checkTerms(){
        cy.get(this.termsCheckBox).click()
    }
    acceptTerms(){
        cy.get(this.startClaim).click()
    }

}