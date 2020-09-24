
export default class BasePage {

    baseUrl       = "https://uat-demo.insytpromotions.com/";
    ukRegionSelector = "a[href='/?country=GB']"
    usRegionSelector = "a[href='/?country=US']"
    frRegionSelector = "a[href='/?country=FR']"
    plRegionSelector = "a[href='/?country=PL']"
    caRegionSelector = "a[href='/?country=CA']"
    landingValidator = "//h1[contains(text(),'Select your region:')]"

    cookieMessage = "#ccc-close";
    
    visit(){
        cy.visit(this.baseUrl)
    }

    selectRegion(region){
        switch(region) {
            case 'UK':
                cy.get(this.ukRegionSelector).click()
              break;
            case 'US':
                cy.get(this.usRegionSelector).click()
              break;
            case 'FR':
                cy.get(this.frRegionSelector).click()
              break;
            case 'PL':
                cy.get(this.plRegionSelector).click()
              break;
            case 'CA':
                cy.get(this.caRegionSelector).click()
              break;
            default:
              console.log("ERROR:Cannot lne the regions sepcified")
          }
    }

    confirmRegionPageLoaded(){
        cy.xpath(this.landingValidator).should('be.visible')
    }

    getPageTitle() {
        return cy.title()
    }

    /*    navigate(path) {
        cy
            .visit(this.baseUrl + path)
            .get(this.cookieMessage)
            .click();
    } 
    */

}