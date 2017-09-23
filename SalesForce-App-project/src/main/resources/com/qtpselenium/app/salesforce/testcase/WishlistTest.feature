@Wishlist

Feature: verification of Wishlist functionality of automation practice application

@wishlist-1
Scenario Outline: verify that user is able to login and able to create new  wishlist
Given I go to "loginURL" on "<Browser>"
And user click on "<Signin>"
And user enter "alreadyemailaddress" as "<alreadyemailaddress>"
And user enter "alreadypassword" as "<alreadypassword>"
And user click on "<submitlogin>"
Then verify that user should land on "<myaccount>"
And verify the text on "<mywishlist>" link
Then user click on "<mywishlist>"
Then user verify that "<anywishlist>" should not be created


Examples:
	|Browser     | Signin | alreadyemailaddress | alreadypassword | submitlogin | myaccount | mywishlist | anywishlist |
	| Chrome     | signin  | alreadyemailaddress | alreadypassword | submitlogin | username | MyWishlist | anywishlist |