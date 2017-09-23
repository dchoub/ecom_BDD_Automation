package com.qtpselenium.app.salesforce.testcase;




import com.qtpselenium.app.salesforce.util.Webconnector;

import cucumber.api.java.After;


public class Hook {
	Webconnector selenium = Webconnector.getInstance(); //new WebConnector();
	@After
	public void afterScenario() throws Exception{
	
		selenium.tearDown();
		
	}
}
