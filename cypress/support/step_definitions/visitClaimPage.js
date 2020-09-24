
import { Given } from "cypress-cucumber-preprocessor/steps";
import { When } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";

import BasePage from '../../pages/basepage';
import ukBasePage from '../../pages/ukPages/ukBasePage';
import selectPromo from '../../pages/ukPages/selectPromo';
import promoHome from '../../pages/ukPages/promoHome'
import personalnfo from '../../pages/ukPages/claimForm/personalnfo'
import prodSelection from '../../pages/ukPages/claimForm/prodSelection'

const basepage = new BasePage();
const ukpage = new ukBasePage();
const selectpromo = new selectPromo();
const promohome = new promoHome();
const personainformation = new personalnfo();
const prodselect = new prodSelection();

Given('Claimant open Insyt promotion page', () => {
    basepage.visit()
});

Given(`Claimant select {string} region`, region => {
    basepage.selectRegion(region)
});

Given(`Claimant select {string} promotion`, promo => {
    selectpromo.selectPromo(promo)
});

Given(`Claimant Click on Claim Now`, () => {
    promohome.pressClaimNow();
});

Given(`Claimant accept terms`, () => {
    promohome.checkTerms();
    promohome.acceptTerms()
});


Given(`Claimant see claim form`, () => {
    personainformation.confirmClaimFormLoaded();
});

Given('Claimant enters personal details', datatable => {
    datatable.hashes().forEach(row => {
        personainformation.enterEmail(row.Email);
        personainformation.selectTitle(row.Title);
        personainformation.enterName(row.FirstName);
        personainformation.enterLname(row.LastName);
        personainformation.enterMobile(row.Phone);
        personainformation.enterDob(row.DOB);
})
})


When(`Claimant Enter Email Address as {string}`, email => {
    personainformation.enterEmail(email);
});

When(`Claimant Enter First Name as {string}`, first => {
    personainformation.enterName(first);
});

When(`Claimant Enter Last Name as {string}`, last => {
    personainformation.enterLname(last);
});

When(`Claimant Enter number as {string}`, number => {
    personainformation.enterMobile(number);
});

When(`Claimant Select Title as {string}`, title => {
    personainformation.selectTitle(title);
});

When(`Claimant enter date of birth as {string}`, dob => {
    personainformation.enterDob(dob);
});

Then(`Claimant Press Next`, () => {
    personainformation.pressNext();
});

Then(`Claimant see product selection page`, () => {
    prodselect.confirmProdPageLoaded();
});

Given(`Claimant select purchased product {string}`, (prod) => {
    prodselect.selectProduct(prod);
});

Given(`Claimant enter a random imei number`, () => {
    prodselect.enterRandomIMEInumber();
});

Given(`Claimant enter {string} as product price`, (price) => {
    prodselect.enterProdPrice(price);
});


Given(`Add Product`, () => {
    prodselect.addProduct();
})

Given(`Claimant Press Next for retailers page`, () => {
    prodselect.pressNext()
})


Given(`Claimant Select the retailer {string}`, (retailer) => {
    console.log("DUMMY")
    //prodselect.selectRetails(retailer)
})

Given(`Claimant Press Next to enter date of purchase`, () => {
    prodselect.gotoProductPurchaseDate()
})

Then(`Claimant enter date of purchase as {string}`, (dop) => {
    prodselect.enterDateOfPurchase(dop)

})

Given(`Claimant Press Next to upload documents to prove purchase`, () => {
    prodselect.gotoProductPurchaseDate()
})

Given(`Upload document {string}`, (doc) => {
    prodselect.selectToUploadDocument(doc)
    prodselect.uploadDocument()
})

Given(`Claimant Press Next to enter address`, () => {
    prodselect.gotoAddressPage()
})

Given(`Claimant Enter pin {string} and address`, (pin) => {
    prodselect.enterAddress(pin)
})

Given('Claimant enters bank details', datatable => {
    datatable.hashes().forEach(row => {
        prodselect.enterBankHolderName(row.Name);
        prodselect.enterRecipientType(row.Type);
        prodselect.enterSortCode(row.SortCode);
        prodselect.enterAccnNum(row.AccNo);

})
    prodselect.gotoLastPage();
})

Then(`Claimant Submit Claim`, () => {
    prodselect.submitClaim()
})

/*

Given Claimant Enter Email Address as "p@g.com"
    And Claimant Select Title as "Mr"
    And Claimant Enter First Name as "Pradeep"
    And Claimant Enter Last Name as "Kumar"
    And Claimant Enter number as "9890989089"
    And Claimant enter date of birth as "02 Aug 2002"

*/