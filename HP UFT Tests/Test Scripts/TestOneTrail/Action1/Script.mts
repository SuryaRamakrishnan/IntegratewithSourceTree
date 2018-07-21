'***********************************************************
Dim TC_Name 
TC_Name="TestOneTrail"
'***************************************************
'Load Path of OR, Function libary and test data from system environment variable.
Set obj =CreateObject("Wscript.Shell")
Set obj1=obj.Environment("USER")
R=obj1("ResourcePath")

RepositoriesCollection.Add R&"ObjectRepository\ObjectRepository\ObjectRepository.tsr"


'First Method to load function library at run time
LoadFunctionLibrary R&"FunctionLibrary\Generic\Generic.qfl", R&"FunctionLibrary\EnteringFieldvalues\EnterFieldValues.qfl"

'Second Method to load function library at run time(Execute File Method picks up only Verification.vbs file )
ExecuteFile R&"FunctionLibrary\Verification\Verification.vbs"

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
