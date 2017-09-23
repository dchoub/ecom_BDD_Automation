package com.qtpselenium.app.salesforce.util;

import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Webconnector {
	// initialize properties file
	// logging
	// selenium/webdriver layer -  selenium commands
	
	Logger APPLICATION_LOGS = Logger.getLogger("devpinoyLogger");
	Properties OR = null;
	Properties CONFIG=null;
	WebDriver driver =null;
	WebDriver mozilla=null;
	WebDriver chrome=null;
	WebDriver ie=null;
	static Webconnector w = null;
	
	
	public Webconnector(){
		
		if(OR==null){
			try{
				// initialize OR
				OR = new Properties();
				FileInputStream fs  = new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\com\\qtpselenium\\app\\salesforce\\config\\OR.properties");
				OR.load(fs);
				
				// initialize CONFIG to corresponding env
				CONFIG= new Properties();
				fs  = new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\com\\qtpselenium\\app\\salesforce\\config\\"+OR.getProperty("testEnv")+"_config.properties");
				CONFIG.load(fs);
				
				//System.out.println(OR.getProperty("loginusername"));
				//System.out.println(CONFIG.getProperty("loginURL"));
				
				
			}catch(Exception e){
				System.out.println("Error on intializing properties files");
			}
			
			
			
		}
		
	}
	
	public String getTestData(String key){
		
		String data = CONFIG.getProperty(key);
		return data;
		
		
	}
	
	/// ****************Application Independent functions************************ ///

	// opening the browser
	public void openBrowser(String browserType){
		
		
		if(browserType.equals("Mozilla") && mozilla==null){
			driver = new FirefoxDriver();
			mozilla=driver;
		}else if(browserType.equals("Mozilla") && mozilla!=null){
			driver=mozilla;
		}else if(browserType.equals("Chrome") && chrome==null){
			//System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"//chrome//chromedriver.exe");
			
			driver=new ChromeDriver();
			chrome=driver;
			
		}else if(browserType.equals("Chrome") && chrome!=null){
			driver=chrome;
		}
		
		else if(browserType.equals("IE")){
			// set the IE server exe path and initialize
		}
		// max
		driver.manage().window().maximize();
		// implicit wait
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	}
	// navigates to a URL
	public void navigate(String URL){
		
		driver.get(CONFIG.getProperty(URL));
	}
	// clicking on any object
	public void click(String objectName){
		
		driver.findElement(By.xpath(OR.getProperty(objectName))).click();
	}
	
	public void type(String text, String objectName){
		log("entering in " +objectName +" " +text );
		WebElement cb = driver.findElement(By.xpath(OR.getProperty(objectName)));
		
		if (cb!=null)
			
			try {
			//driver.findElement(By.xpath(OR.getProperty(objectName))).sendKeys(CONFIG.getProperty(text));
				cb.sendKeys(CONFIG.getProperty(text));
			}
		
		    catch(Exception e){
		    	log("element not found exception " +objectName);
		    	throw new NoSuchElementException("Element could not be found " +objectName);
		    }
			
	}
	
	public WebElement findelement(String object) {
		WebElement cb = driver.findElement(By.xpath(OR.getProperty(object)));
		if (cb!=null)
			
			try {
		log("Element is present " +object);
			}
		catch(Exception e){
			throw new NoSuchElementException("Element could not be found" +object);
	}
		return cb;
	}
	
	public void select(String text, String objectName){
		
		driver.findElement(By.xpath(OR.getProperty(objectName))).sendKeys(CONFIG.getProperty(text));
	}
	
	public boolean isElementPresent(String objectName){
		
		int count = driver.findElements(By.xpath(OR.getProperty(objectName))).size();
		
		log ("count is " +count);
		if(count==0)
			return false;
		else
			return true;
	}
	
	

	
	
	
	/// ****************Application dependent functions************************ ///
	
	public boolean isLoggedIn(){
		
		if(isElementPresent("searchText"))
			return true;
		else
			return false;
	}
	
	public void doDefaultLogin(){
		navigate("loginURL");
		type(CONFIG.getProperty("defaultUsername"), "loginusername");
		type(CONFIG.getProperty("defaultPassword"), "loginpassword");
		click("loginButton");
	}
	
	
	////********Singleton********////
	
	public static Webconnector getInstance(){
		if (w==null)
		w= new Webconnector();
		
		return w;
		
		
	}
	/////*******logging****//
	public void log(String message){
		APPLICATION_LOGS.debug(message);
		
	}
	
	//////*****Closing Browser******/////
	public void tearDown(){
	  driver.quit();
		//driver.close();
	   chrome=null;
	   mozilla=null;
		ie=null;
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
}

