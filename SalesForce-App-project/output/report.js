$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com\\qtpselenium\\app\\salesforce\\testcase\\LoginTest.feature");
formatter.feature({
  "line": 2,
  "name": "Registration and login in automation practice application",
  "description": "",
  "id": "registration-and-login-in-automation-practice-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "line": 27,
  "name": "Registration in automation practice application",
  "description": "",
  "id": "registration-and-login-in-automation-practice-application;registration-in-automation-practice-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 5,
      "name": "@login-1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I go to \"loginURL\" on \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user click on \"signin\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enter \"emailaddress\" as \"emailaddress\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on \"createanaccount\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify that user should land on \"accountcreationform\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user click on \"Mrs\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enter in the form",
  "matchedColumns": [
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "rows": [
    {
      "cells": [
        "firstname"
      ],
      "line": 14
    },
    {
      "cells": [
        "lastname"
      ],
      "line": 15
    },
    {
      "cells": [
        "password"
      ],
      "line": 16
    },
    {
      "cells": [
        "address"
      ],
      "line": 17
    },
    {
      "cells": [
        "city"
      ],
      "line": 18
    },
    {
      "cells": [
        "postcode"
      ],
      "line": 19
    },
    {
      "cells": [
        "mobilenumber"
      ],
      "line": 20
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user select \"state\" as \"state\"",
  "matchedColumns": [
    13
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user click on \"register\"",
  "matchedColumns": [
    14
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "verify that user should land on \"username\"",
  "matchedColumns": [
    15
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "loginURL",
      "offset": 9
    },
    {
      "val": "Chrome",
      "offset": 23
    }
  ],
  "location": "CommonUtil.I_Go_To_AutomationPractice(String,String)"
});
formatter.result({
  "duration": 15950064089,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "signin",
      "offset": 15
    }
  ],
  "location": "CommonUtil.user_click_on(String)"
});
formatter.result({
  "duration": 1761507950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "emailaddress",
      "offset": 12
    },
    {
      "val": "emailaddress",
      "offset": 30
    }
  ],
  "location": "CommonUtil.user_enter(String,String)"
});
formatter.result({
  "duration": 390235909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "createanaccount",
      "offset": 15
    }
  ],
  "location": "CommonUtil.user_click_on(String)"
});
formatter.result({
  "duration": 134541653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "accountcreationform",
      "offset": 33
    }
  ],
  "location": "CommonUtil.verify_that_user_should_land_on(String)"
});
formatter.result({
  "duration": 5063820405,
  "error_message": "cucumber.api.PendingException: user has not landed on account creation page\r\n\tat com.qtpselenium.app.salesforce.testcase.CommonUtil.verify_that_user_should_land_on(CommonUtil.java:49)\r\n\tat ✽.Then verify that user should land on \"accountcreationform\"(com\\qtpselenium\\app\\salesforce\\testcase\\LoginTest.feature:11)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Mrs",
      "offset": 15
    }
  ],
  "location": "CommonUtil.user_click_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.user_enter_in_the_form(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "state",
      "offset": 13
    },
    {
      "val": "state",
      "offset": 24
    }
  ],
  "location": "CommonUtil.user_select(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "register",
      "offset": 15
    }
  ],
  "location": "CommonUtil.user_click_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 33
    }
  ],
  "location": "CommonUtil.verify_that_user_should_land_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 45,
  "name": "Login to automation practice and verify the account details",
  "description": "",
  "id": "registration-and-login-in-automation-practice-application;login-to-automation-practice-and-verify-the-account-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 30,
      "name": "@login-2"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I go to \"loginURL\" on \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "user click on \"signin\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user enter \"alreadyemailaddress\" as \"alreadyemailaddress\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user enter \"alreadypassword\" as \"alreadypassword\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user click on \"submitlogin\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "verify that user should land on \"username\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "verify that \"username\" should match with \"firstname\" and \"lastname\"",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "loginURL",
      "offset": 9
    },
    {
      "val": "Chrome",
      "offset": 23
    }
  ],
  "location": "CommonUtil.I_Go_To_AutomationPractice(String,String)"
});
formatter.result({
  "duration": 11605140526,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "signin",
      "offset": 15
    }
  ],
  "location": "CommonUtil.user_click_on(String)"
});
formatter.result({
  "duration": 1800380218,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alreadyemailaddress",
      "offset": 12
    },
    {
      "val": "alreadyemailaddress",
      "offset": 37
    }
  ],
  "location": "CommonUtil.user_enter(String,String)"
});
formatter.result({
  "duration": 358088602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alreadypassword",
      "offset": 12
    },
    {
      "val": "alreadypassword",
      "offset": 33
    }
  ],
  "location": "CommonUtil.user_enter(String,String)"
});
formatter.result({
  "duration": 159931798,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submitlogin",
      "offset": 15
    }
  ],
  "location": "CommonUtil.user_click_on(String)"
});
formatter.result({
  "duration": 1473863148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 33
    }
  ],
  "location": "CommonUtil.verify_that_user_should_land_on(String)"
});
formatter.result({
  "duration": 29832165,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 13
    },
    {
      "val": "firstname",
      "offset": 42
    },
    {
      "val": "lastname",
      "offset": 58
    }
  ],
  "location": "LoginTest.account_name_should_match(String,String,String)"
});
formatter.result({
  "duration": 48021369,
  "status": "passed"
});
formatter.uri("com\\qtpselenium\\app\\salesforce\\testcase\\WishlistTest.feature");
formatter.feature({
  "line": 3,
  "name": "verification of Wishlist functionality of automation practice application",
  "description": "",
  "id": "verification-of-wishlist-functionality-of-automation-practice-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Wishlist"
    }
  ]
});
formatter.scenario({
  "line": 20,
  "name": "verify that user is able to login and able to create new  wishlist",
  "description": "",
  "id": "verification-of-wishlist-functionality-of-automation-practice-application;verify-that-user-is-able-to-login-and-able-to-create-new--wishlist;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@wishlist-1"
    },
    {
      "line": 1,
      "name": "@Wishlist"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I go to \"loginURL\" on \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user click on \"signin\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enter \"alreadyemailaddress\" as \"alreadyemailaddress\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enter \"alreadypassword\" as \"alreadypassword\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click on \"submitlogin\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verify that user should land on \"username\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "verify the text on \"MyWishlist\" link",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user click on \"MyWishlist\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "loginURL",
      "offset": 9
    },
    {
      "val": "Chrome",
      "offset": 23
    }
  ],
  "location": "CommonUtil.I_Go_To_AutomationPractice(String,String)"
});
formatter.result({
  "duration": 11977476005,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "signin",
      "offset": 15
    }
  ],
  "location": "CommonUtil.user_click_on(String)"
});
formatter.result({
  "duration": 2033644614,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alreadyemailaddress",
      "offset": 12
    },
    {
      "val": "alreadyemailaddress",
      "offset": 37
    }
  ],
  "location": "CommonUtil.user_enter(String,String)"
});
formatter.result({
  "duration": 444657014,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alreadypassword",
      "offset": 12
    },
    {
      "val": "alreadypassword",
      "offset": 33
    }
  ],
  "location": "CommonUtil.user_enter(String,String)"
});
formatter.result({
  "duration": 120035375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submitlogin",
      "offset": 15
    }
  ],
  "location": "CommonUtil.user_click_on(String)"
});
formatter.result({
  "duration": 1523559476,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 33
    }
  ],
  "location": "CommonUtil.verify_that_user_should_land_on(String)"
});
formatter.result({
  "duration": 25384129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MyWishlist",
      "offset": 20
    }
  ],
  "location": "CommonUtil.verfiy_text_on_link(String)"
});
formatter.result({
  "duration": 65135459,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MyWishlist",
      "offset": 15
    }
  ],
  "location": "CommonUtil.user_click_on(String)"
});
formatter.result({
  "duration": 1418193522,
  "status": "passed"
});
});