Public Function fn_VerifywhetherSalesforcelaunched(TC_Name)
	
	
	'Verify whether salesforce is launched - Function

If Browser("Login | Salesforce").Page("Login | Salesforce").WebEdit("username").WaitProperty ("html id","username", 1000) Then
	
	Reporter.ReportEvent micPass, "Verify whether Salesforce application is launched","Salesforce Application is launched Successfully"
	
'Enter Login Credentials	
fn_EnterloginCredentials()
	else
	
	Reporter.ReportEvent micFail, "Verify whether Salesforce application is launched","Salesforce Application is not launched Successfully"
	End If
	
End Function


'******************************


Public Function fn_VerifywhetherSalesforceLoginSuccessful(TC_Name)
	
	
'Verify whether login to salesforce is succcessfull



If Browser("Login | Salesforce").Page("Home Page ~ Salesforce").Link("Home").WaitProperty ("text","Home",1000) Then
	
	Reporter.ReportEvent micPass, "Verify whether User is able to login to Salesforce application","User is able to login to Salesforce application"
	
	else
	Reporter.ReportEvent micFail, "Verify whether User is able to login to Salesforce application","User is not able to login to Salesforce application"
	
	
End If

End Function

'*********************************************
Public Function fn_VerifyLogoutSuccessful(TC_Name)
	
	'Verify Logout Successfull

If Browser("Login | Salesforce").Page("Login | Salesforce").WebEdit("username").WaitProperty ("html id","username", 1000) Then
	
	Reporter.ReportEvent micPass, "Verify whether Salesforce application is Logged Out","Salesforce Application is logged out successfully"
	
	
	else
	
	Reporter.ReportEvent micFail, "Verify whether Salesforce application is Logged Out","Salesforce Application is not logged out"
	
	END  IF 
End Function
