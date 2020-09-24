import 'cypress-file-upload';

export default class prodSelection {
    landingValidator = "//div[contains(text(), 'Select the product you purchased')]"
    selectProd = "select[name='section_which[product]']"
    prodPrice = "input[name='section_which[product_price]']"
    imeinumber = "input[name='section_which[imei]']"
    addProd = "button[name='section_which[submit_add]']"
    next = "//button[@type='submit' and contains(., 'NEXT')]" 
    //nextPage
    retailers = "select[name='section_where[retailer]']"
    nextOnProductPage = "//button[@type='submit' and contains(., 'NEXT')]"

    //nextPage
    prevMonth = "span.flatpickr-prev-month"
    dateOfPurchase = "//*[@id='test']/div[4]/div/div/div[2]/div/div/input[2]"

    //next Page
    uploadPath = "[class='message']"
    uploadButton = "button[name='section_receipt[submit_add]']"

    //Next Page
    addressfield1 = "//*[@id='section_extra_details[claimant_postcode]']"

    //Next Page Bank Details
    bankHolderName = "//*[@id='section_transferwise[accountHolderName]']"
    recipientType = "//*[@id='section_transferwise[twise_legalType]']"
    sortCode = "//*[@id='section_transferwise[twise_sortCode]']"
    accnNum = "//*[@id='section_transferwise[twise_accountNumber]']"

    //submitClaim
    submitClaimBtn = "//*[@id='submit_claim']"

    // Claim number
    clickToCopy = "//*[@id='clickToCopy']"

    confirmProdPageLoaded(){
        cy.xpath(this.landingValidator).should('be.visible')
    }

    selectProduct(productName){
        cy.get(this.selectProd).select(productName)

    }

    enterRandomIMEInumber(){
        var num = Math.floor(100000000000000 + Math.random() * 900000000000000);
        console.log("Generated IMEI number is: " + num)
        cy.get(this.imeinumber).clear().type(num)
    }

    enterProvidedIMEInumber(num){
        cy.get(this.imeinumber).clear().type(num)
    }

    enterProdPrice(price){
        cy.get(this.prodPrice).clear().type(price)
    }

    addProduct(){
        //Functionality to be added
        cy.get(this.addProd).click({force: true})
    }

    pressNext(){    
        cy.xpath(this.next).last().click()
    }


    // Next Page
    selectRetails(retailer){
        cy.get(this.retailers).select(retailer)
    }

    gotoProductPurchaseDate(){
        cy.xpath(this.next).last().click({force: true})
        //this.pressNext()
    }

    // Next Page
    enterDateOfPurchase(dop){
        cy.xpath(this.dateOfPurchase).click()
        cy.get(this.prevMonth).click()
        var date = "span[aria-label='xxxx']".replace('xxxx', dop)
        cy.get(date).click()
        cy.get("i.fal.fa-calendar-alt").click()
    }

    gotoDocumentUploadPage(){
        this.pressNext()
    }

    //Next Page

    selectToUploadDocument(path){
        cy.get(this.uploadPath).attachFile(path, { subjectType: 'drag-n-drop' })
    }

    uploadDocument(){
        cy.get(this.uploadButton).click()
    }

    gotoAddressPage(){
        this.pressNext()
    }


    //Next Page
    enterAddress(pin){
        cy.xpath(this.addressfield1).clear().type(pin)
        cy.xpath("//*[@id='CLAIMS_PAGE']/div[4]/div[1]/div[2]/div[1]").click()
        cy.xpath("//*[@id='section_extra_details[claimant_address1]']").type('McKillens Ltd')
        cy.get("[id='section_extra_details[claimant_county]']").scrollIntoView()
        cy.xpath("//*[@id='section_extra_details[claimant_county]']").click()
        this.gotoBankDetailsPage()
    }

    gotoBankDetailsPage(){
        this.pressNext()
    }

    //Next Page (Bank Details)
    enterBankHolderName(hName){
        cy.xpath(this.bankHolderName).type(hName)
    }

    enterRecipientType(rType){
        cy.xpath(this.recipientType).type(rType)
    }

    enterSortCode(scode){
        cy.xpath(this.sortCode).type(scode)
    }

    enterAccnNum(acNum){
        cy.xpath(this.accnNum).type(acNum)
        cy.xpath(this.accnNum).click()

    }
    gotoLastPage(){
        this.pressNext() 
    }

    //Next Page Submit Claim

    submitClaim(){
        cy.xpath(this.submitClaimBtn).last().click()

    }
    // Next Page

    copyClaimnum(){
        cy.xpath(this.clickToCopy).scrollIntoView().click()
    }

}