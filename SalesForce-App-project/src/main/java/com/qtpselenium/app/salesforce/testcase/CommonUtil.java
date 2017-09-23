package com.qtpselenium.app.salesforce.testcase;



import com.qtpselenium.app.salesforce.util.Webconnector;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class CommonUtil {
   Webconnector selenium = Webconnector.getInstance();
   
   @Given("^I go to \"([^\"]*)\" on \"([^\"]*)\"$")
	public void I_Go_To_AutomationPractice(String URL,String browser){
		selenium.log("navigating to page" +URL);
		System.out.println("I am going to "+ URL +" on  "+ browser);
		selenium.openBrowser(browser);
		selenium.navigate(URL);
	}
   
   
   @And("^user click on \"([^\"]*)\"$")
   public void user_click_on(String object){
	   selenium.log("user now click on " +object);
	   selenium.click(object);
	   selenium.log("user has clicked on " +object);
   }
   
   @And("^user enter \"([^\"]*)\" as \"([^\"]*)\"$")
   public void user_enter(String key, String text){
	   selenium.log("entering in " +key+" "+text);
	   selenium.type(text, key);
	   selenium.log("user has enteres in " +key);
	   
   }
   
   @Then("^verify that user should land on \"([^\"]*)\"$")
   public void verify_that_user_should_land_on(String object){
	   selenium.log("user verify that " +object +"should present");
	   
			   if (selenium.isElementPresent(object)){
				      selenium.log("user has landed successfully on " +object);
				      
				 }   
			   else {
				   selenium.log("user has not  landed successfully on " +object);
				   throw new PendingException("user has not landed on account creation page");
			   }
	   }
	   
  
   
   @Then("^user select \"([^\"]*)\" as \"([^\"]*)\"$")
   public void user_select(String key,String text){
	   selenium.log("user select state as " +key);
	   selenium.select(text, key);
   }
   
   @And("^verify the text on \"([^\"]*)\" link$")
   public void verfiy_text_on_link(String key){
	   selenium.log("link to be verified" +key);
	   String link_text = selenium.findelement(key).getText();
	   selenium.log("text on screen is " +link_text);
	   String Expected_text = selenium.getTestData(key);
	   selenium.log("text in test data is "+Expected_text);
	   
	   if(link_text.equals(Expected_text))
	   {
		   selenium.log("link_text is matching with " +Expected_text);
		   
	   }
	   else
	   {
		   throw new PendingException("text on link " +key+ " is not matching with "+Expected_text);
		   
	   }
	   
   }
   
  
   
	
  
	
	
}
