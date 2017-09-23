$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("main\\resources\\com\\qtpselenium\\app\\salesforce\\testcase\\LoginTest.feature");
formatter.feature({
  "line": 1,
  "name": "Registration in automation practice application",
  "description": "",
  "id": "registration-in-automation-practice-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Registration in automation practice application",
  "description": "",
  "id": "registration-in-automation-practice-application;registration-in-automation-practice-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I go to \"loginURL\" on \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user click on \"\u003cSignin\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "registration-in-automation-practice-application;registration-in-automation-practice-application;",
  "rows": [
    {
      "cells": [
        "Browser",
        "Signin"
      ],
      "line": 12,
      "id": "registration-in-automation-practice-application;registration-in-automation-practice-application;;1"
    },
    {
      "cells": [
        "Chrome",
        "signin"
      ],
      "line": 13,
      "id": "registration-in-automation-practice-application;registration-in-automation-practice-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Registration in automation practice application",
  "description": "",
  "id": "registration-in-automation-practice-application;registration-in-automation-practice-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I go to \"loginURL\" on \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user click on \"signin\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
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
  "location": "LoginTest.I_Go_To_AutomationPractice(String,String)"
});
formatter.result({
  "duration": 14602909103,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("test\\resources\\com\\qtpselenium\\app\\salesforce\\login\\login.feature");
formatter.feature({
  "line": 1,
  "name": "Logging to automation practice application",
  "description": "",
  "id": "logging-to-automation-practice-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Logging to automation practice application",
  "description": "",
  "id": "logging-to-automation-practice-application;logging-to-automation-practice-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I go to \"loginURL\" on \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user click on \"\u003cSignin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter \"loginusername\" as \"\u003cUsername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter \"loginpassword\" as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on \"loginButton\"",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "logging-to-automation-practice-application;logging-to-automation-practice-application;",
  "rows": [
    {
      "cells": [
        "Browser",
        "Signin",
        "Username",
        "Password"
      ],
      "line": 14,
      "id": "logging-to-automation-practice-application;logging-to-automation-practice-application;;1"
    },
    {
      "cells": [
        "Chrome",
        "signin",
        "xxxxx",
        "zxxxx"
      ],
      "line": 15,
      "id": "logging-to-automation-practice-application;logging-to-automation-practice-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Logging to automation practice application",
  "description": "",
  "id": "logging-to-automation-practice-application;logging-to-automation-practice-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I go to \"loginURL\" on \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user click on \"signin\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter \"loginusername\" as \"xxxxx\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter \"loginpassword\" as \"zxxxx\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on \"loginButton\"",
  "keyword": "And "
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
  "location": "LoginTest.I_Go_To_AutomationPractice(String,String)"
});
formatter.result({
  "duration": 2274536574,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});