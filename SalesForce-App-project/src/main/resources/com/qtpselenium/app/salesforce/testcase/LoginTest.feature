@login
Feature: Registration and login in automation practice application


@login-1
Scenario Outline: Registration in automation practice application  
Given I go to "loginURL" on "<Browser>"
And user click on "<Signin>" 
And user enter "emailaddress" as "<emailaddress>"
And user click on "<createanaccount>"
Then verify that user should land on "<accountcreationpage>"
Then user click on "<gender>"
Then user enter in the form
	| <Label 1> | 
	| <Label 2> | 
	| <Label 3> | 
	| <Label 4> | 
	| <Label 5> | 
	| <Label 6> | 
	| <Label 7> | 
Then user select "state" as "<state>"
Then user click on "<Register>"
Then verify that user should land on "<myaccountpage>"

Examples:
	|Browser     | Signin | emailaddress | createanaccount | accountcreationpage |gender | Label 1 | Label 2 | Label 3 | Label 4 | Label 5 | Label 6 | Label 7 |  state | Register |myaccountpage |
	| Chrome     | signin  |  emailaddress | createanaccount | accountcreationform |Mrs| firstname | lastname |password | address |city |postcode |mobilenumber | state | register |username |
	
	
@login-2
Scenario Outline: Login to automation practice and verify the account details
Given I go to "loginURL" on "<Browser>"
And user click on "<Signin>"
And user enter "alreadyemailaddress" as "<alreadyemailaddress>"
And user enter "alreadypassword" as "<alreadypassword>"
And user click on "<submitlogin>"
Then verify that user should land on "<myaccount>"
Then verify that "<myaccount>" should match with "<firstname>" and "<lastname>"




Examples:
	|Browser     | Signin | alreadyemailaddress | alreadypassword | submitlogin | myaccount | firstname |lastname |
	| Chrome     | signin  | alreadyemailaddress | alreadypassword | submitlogin | username |firstname | lastname |
	