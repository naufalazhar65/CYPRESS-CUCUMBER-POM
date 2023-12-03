/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import addressPage from '../../Pages/AddressPage/AddressPage.cy';

Given('the user is on the address management page', () => {
    addressPage.enterURL();
});

When('the user adds a new address with valid details', (datatable) => {
	// completeCheckoutProcess for add new address
	datatable.hashes().forEach((element) => {
		addressPage.addNewAddress(
			element.FirstName,
			element.LastName,
			element.Company,
			element.Address1,
			element.Address2,
			element.City,
			element.PostCode,
		)

	})
})

Then('the new address should be visible in the address list', () => {
    addressPage.verifyAddressList();
});

When('the user edits an existing address', (datatable) => {
    datatable.hashes().forEach((element) => {
		addressPage.editAddress(
			element.FirstName,
			element.LastName,
			element.Company,
			element.EditedAddress1,
			element.Address2,
			element.City,
			element.PostCode,
		)

	})
});

And('updates the address details', () => {
    addressPage.clickContinue()
});

Then('the changes should be reflected in the address list', (datatable) => {
    datatable.hashes().forEach((element) => {
		addressPage.verifyUserAddressEdited(
			element.FirstName,
			element.LastName,
			element.Company,
			element.EditedAddress1,
			element.Address2,
			element.City,
			element.PostCode,
		)
	})    
});

When('the user deletes an existing address', () => {
    addressPage.deleteAddress()
});

Then('the address should be removed from the address list', () => {
    addressPage.verifyAddressDeleted()
});
