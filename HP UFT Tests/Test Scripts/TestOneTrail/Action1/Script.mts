'First Test
Systemutil.Run "https://login.salesforce.com/?locale=in"





'Verify whether salesforce is launched - Function

If Browser("Login | Salesforce").Page("Login | Salesforce").WebEdit("username").WaitProperty ("html id","username", 1000) Then
	
	Reporter.ReportEvent micPass, "Verify whether Salesforce application is launched","Salesforce Application is launched Successfully"
	
	'Enter Login credentials
	Browser("Login | Salesforce").Page("Login | Salesforce").WebEdit("username").Set "suryaramakrishnan@rocketmail.com"
	Browser("Login | Salesforce").Page("Login | Salesforce").WebEdit("pw").Set "Arrow@123456"
	Browser("Login | Salesforce").Page("Login | Salesforce").WebButton("Log In").Click
	
	else
	
	Reporter.ReportEvent micFail, "Verify whether Salesforce application is launched","Salesforce Application is not launched Successfully"
	
End If




'Verify whether login to salesforce is succcessfull



If Browser("Login | Salesforce").Page("Home Page ~ Salesforce").Link("Home").WaitProperty ("text","Home",1000) Then
	
	Reporter.ReportEvent micPass, "Verify whether User is able to login to Salesforce application","User is able to login to Salesforce application"
	
	else
	Reporter.ReportEvent micFail, "Verify whether User is able to login to Salesforce application","User is not able to login to Salesforce application"
	
	
End If




'Logout function

Browser("Login | Salesforce").Page("Home Page ~ Salesforce").WebElement("userNav-arrow").Click @@ hightlight id_;_Browser("Login | Salesforce").Page("Home Page ~ Salesforce").WebElement("userNav-arrow")_;_script infofile_;_ZIP::ssf1.xml_;_

Browser("Login | Salesforce").Page("Home Page ~ Salesforce").Link("Logout").Click @@ hightlight id_;_Browser("Login | Salesforce").Page("Home Page ~ Salesforce").Link("Logout")_;_script infofile_;_ZIP::ssf3.xml_;_

'Verify Logout Successfull

If Browser("Login | Salesforce").Page("Login | Salesforce").WebEdit("username").WaitProperty ("html id","sername", 1000) Then
	
	Reporter.ReportEvent micPass, "Verify whether Salesforce application is Logged Out","Salesforce Application is logged out successfully"
	
	
	else
	
	Reporter.ReportEvent micFail, "Verify whether Salesforce application is Logged Out","Salesforce Application is not logged out"
	
End If


'Close browser
 @@ hightlight id_;_Browser("Login | Salesforce").Page("Login | Salesforce_2")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Login | Salesforce").CloseAllTabs
