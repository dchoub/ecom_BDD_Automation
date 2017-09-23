package com.qtpselenium.app.salesforce.testcase;

import com.qtpselenium.app.salesforce.util.Webconnector;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;

public class wishList {
	
	Webconnector selenium = Webconnector.getInstance(); //new WebConnector();
	
	
	@Then("^Then user verify that \"([^\"]*)\" should not be created$")
	public void verify_anywishlist(String Key){
		if (selenium.isElementPresent(Key)){
			selenium.log("wish list is already created");
			System.out.println("Wish list is already created for this user");
			throw new PendingException("Wishlist is already created");
		}
		else
		{
			selenium.log("wish list is not created");	
		}
	}
	
	
	

}
