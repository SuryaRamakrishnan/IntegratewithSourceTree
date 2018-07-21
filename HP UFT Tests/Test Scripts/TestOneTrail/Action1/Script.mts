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

