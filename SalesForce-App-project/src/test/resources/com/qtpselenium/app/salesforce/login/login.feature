Feature: Logging to automation practice application

@login
Scenario Outline: Logging to automation practice application

Given I go to "loginURL" on "<Browser>"
And user click on "<Signin>" 
And I enter "loginusername" as "<Username>"
And I enter "loginpassword" as "<Password>"
And I click on "loginButton"


 Examples:
	|Browser     | Signin | Username            			| Password 	   | 
	| Chrome     |signin  |  xxxxx    						| zxxxx        | 
	