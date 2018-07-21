'***********************************************************
Dim TC_Name 
TC_Name="TestOneTrail"
'***************************************************

'First Test
fn_LoginintoSalesforce(TC_Name)


'Verify whether salesforce is launched - Function
fn_VerifywhetherSalesforcelaunched(TC_Name)


'Verify whether login to salesforce is succcessfull
fn_VerifywhetherSalesforceLoginSuccessful(TC_Name)



'Logout function
fn_Logoutfromsalesforce()
 @@ hightlight id_;_Browser("Login | Salesforce").Page("Home Page ~ Salesforce").Link("Logout")_;_script infofile_;_ZIP::ssf3.xml_;_

'Verify Logout Successfull
fn_VerifyLogoutSuccessful(TC_Name)

'Close IE
fn_CloseIE()
