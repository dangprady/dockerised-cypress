
export default class personalInfo {
    landingValidator = "//div[contains(text(), 'Lets get to know each other')]"
    emailadr = "input[type='email']"
    fname = "input[name='section_person[claimant_forename]']"
    lname = "input[name='section_person[claimant_surname]']"
    title = "select[name='section_person[claimant_title]']"
    mobile = "input[name='section_person[claimant_mobile]']"
    dob = "//*[@id='test']/div[3]/div/div/div[8]/div/div/input[2]"
    next = "button[type='submit'][value='NEXT']"

    confirmClaimFormLoaded(){
        cy.xpath(this.landingValidator).should('be.visible')
    }
    enterEmail(email){
        cy.get(this.emailadr).type(email)
    }

    enterName(name){
        cy.get(this.fname).type(name)
    }

    enterLname(surname){
        cy.get(this.lname).type(surname)
    }

    enterMobile(mobNum){
        cy.get(this.mobile).type(mobNum)
    }

    selectTitle(ctitle){
        //Functionality to be added
        cy.get(this.title).select(ctitle)
    }

    enterDob(date){
        //Functionality to be added
        cy.xpath(this.dob).type(date)
    }

    pressNext(){
        cy.get(this.next).click({multiple: true, force: true})
    }


}