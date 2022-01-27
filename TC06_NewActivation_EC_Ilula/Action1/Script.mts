''For s = 1 To  RowCount
''datatable.SetCurrentRow(s)
''
testCaseStartTime=now
globalsearch("id")
click_newActivation()
selectCustomertype()
selectDeal_Customer()
customis_dealPage()
InsurancePage()
CreateCUstomerPage()
select_ID_type()
select_payment_method_type()
Upload_Docs()
DeliveryType()
NumberReservationPage()
VettingSubmitPage()
''UsagelimitPage()
fetchOrderDetails()
Call Database_Query("sim")
globalsearch("id")
''Call authentication()
See_Customer360()
Verify_orders_in_Cust360()
ResumeOrderPage()
VerifyVettingmessage()
UsagelimitPage()
ContractGenerationPage()
RICAPage()
OrderSubmissionPage()
call Go_to_Cust360()
globalsearch("id")
ViewContract360()
''Next
testCaseEndTime=now
''
Datatable("ExecutionTime", "TestCase") = datediff("n", testCaseStartTime, testCaseEndTime) & " minutes"
Call ins_data ("overall", Environment("TestName"), "NewActivation_EC_", "", "", "", "", Datatable("Result", "TestCase"), Datatable("ExecutionTime", "TestCase"))
ex_rep "ind"
ZipFolder
ALMConnection_attachScreenshot


debicheck_verifyApprovalStatus



'
' 
' Set objDesc = Description.Create
'objDesc("micclass").value = "WebElement"
'objDesc("html tag").value = "TD"
'Set childobjdesc=Browser("Google").Page("title:=.*").WebTable("name:=DataTable").ChildObjects(objDesc)
'Set childobjdescss=Browser("creationTime:=0").Page("title:=.*").WebTable("name:=WebTable").ChildObjects(objDesc)
 	'''Verify the Approval Status 
 	Set debistatus=Description.Create
 	debistatus("micclass").value="WebElement"
 	debistatus("html id").value="1_s_1_l_Approval_status"
 	debistatus("innertext").value="Declined"
 	debistatus("html tag").value="TD"
' set objList=Browser("Yahoo! Mail: The best").Page("Yahoo! Mail: The best").WebTable("Yahoo! ID:").ChildObjects(debistatus)
set  xaa=Browser("creationTime:=0").Page("title:=.*").WebTable("class:=ui-jqgrid.*","html id:=s_1_l","html tag:=TABLE").ChildObjects(debistatus)
print xaa.count

For i = 1 To xaa.count Step 1
	xaa.item(i).Click
	If verifyExist(xaa.item(i)) Then
		print "siddhant"
	End If
Next
If verifyExist(xaa) Then 
passTestCase "DebiCheck_Declined"
Else 
failTestCase "DebiCheck_NoStatus"
End if 



''''Verify if the order status is Pending
'Set status_Pending=Description.Create
'status_Pending("micclass").value="WebElement"
''status("html id").value="1_s_8_l_Status"
'status_Pending("title").value ="Pending"
''status("title").value ="Open"
'status_Pending("visible").value="True"
'
'Set order_status_Pending= Browser("creationTime:=0").Page("title:= .*").ChildObjects(status_Pending)
'
'print order_status_Pending.Count
'count_status=order_status_Pending.Count
'
'Do While (count_status>0)
''	order_status.item(i).GetROProperty("html tag").Click
'	order_status_Pending.item(i).Click
'	passTestCase("Order_Pendng")
'







''
'
'
'

