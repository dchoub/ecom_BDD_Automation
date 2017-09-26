package com.qtpselenium.app.salesforce.testcase;





import java.util.List;
import com.qtpselenium.app.salesforce.util.Webconnector;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Then;

//step layer
public class LoginTest {
	Webconnector selenium =  Webconnector.getInstance(); //new WebConnector();
	
	@Then("^user enter in the form$")
		public void user_enter_in_the_form(DataTable table){
		List<String> fields= table.asList(String.class);
		selenium.log("form has total text fields as " +fields.size());
		for(int i=0;i<fields.size();i++){
			selenium.log("user is entering in " +fields.get(i));
			selenium.type(fields.get(i), fields.get(i));
			//test 1
		}
		
			
		}
	
	 @Then("^verify that \"([^\"]*)\" should match with \"([^\"]*)\" and \"([^\"]*)\"$")
		public void account_name_should_match(String username, String firstname, String lastname){
			
			 String fname =selenium.getTestData(firstname);
			 String lname = selenium.getTestData(lastname);
			 selenium.log("first name is  " +fname+" last name is  "+lname);
			 String username_text = selenium.findelement(username).getText();
			 selenium.log("username on screen is  " +username_text );
			 String fullname = fname+" " +lname;
			 selenium.log("full name is "+fullname);
			
			if (fullname.equals(username_text))
			{
				selenium.log("user name is correct " +username_text);
			}
			else
			{
				selenium.log("user name does not match with test data " +username_text);
				   throw new PendingException("user name does not match correclty");
			}
			
			
		}
	
		
	}

