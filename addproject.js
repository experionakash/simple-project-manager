
$(function() {
	
  $( "#startdate" ).datepicker({dateFormat: 'dd-M-yy'}); //date picker for project start date
  $( "#enddate" ).datepicker({dateFormat: 'dd-M-yy'});   //date picker for project end date
	
	let valflag = false;  // flag used  validatin() for required field validation
	
  $("#add").click(function(e){
  	 e.preventDefault();

	  if(validate())
	  {	  
		  if(currencycheck() && datevalidations())
		  {
			  // getting the user input into a object and storing it in local storage
			  	let project = new Object()
				project.pname = $("#pname").val();
				project.pcode = $("#pcode").val();
				project.currency= $("#currency").val();
				project.customer=$("#customer").val();
				project.customertype=$("#ctype:checked").val();
				project.manager=$("#manager").val();
				project.status=$("#status").val();
				project.startdate=$("#startdate").val();
				if($("#enddate").val() === "")
					project.enddate="not mensiond";
				else
					project.enddate=$("#enddate").val();
				localStorage.setItem("project",JSON.stringify(project));
				alert("Project successfuly added");
				window.location.href = "display.html"; // redirecting to display.html for showing the details .
		  }
	  }
	  return false;
	});


	function validate() { //functin for required field validatin
		
		addstyle("#manager",""); // addstyle() which check if the field is empty or not, add a style if the field is empty and remove style if not empty.
		addstyle("#pname","");
		addstyle("#pcode","");
		addstyle("#startdate","");
		addstyle("#currency","select currency");
		addstyle("#customer","select customer");
		addstyle("#status","select status");
		if ($("#ctype:checked").length === 0)  // 
		{
			$("#radio-div").addClass("required");  
			$("#ctype").focus();
			valflag = true;
		}
		else 
			$("#radio-div").removeClass("required");
		
		

		if (valflag === true)
		{
			$("#warning").dialog({modal:true,
				title: 'Warning',
				width: 400,
				buttons : {
					Ok: function() {
						$(this).dialog("close"); //closing on Ok click
					}
				}
				
			});
			valflag = false;
			
			return false;
		}
		else
			return true;
			
	}

	function addstyle(id,value){
		if ( $(id).val() ===value ) {
			$(id).addClass("required");
			valflag = true;
		}
		else 
			$(id).removeClass("required");
		
	}



function datevalidations()
{	
	let startdate = new Date( $("#startdate").val());
	let enddate = new Date( $("#enddate").val());
	let today = new Date();
	 let dateval=true;
	 
	 if( startdate > enddate )
		 {
			 alert("No projects can end befor it's start. please check your project Start Date and End Date.")
			 dateval = false;
		 }
		if(startdate > today )
		{	
			if( $("#status").val() != 'Yet To Start' )
			{
				let f = confirm("if the start date is in future then the project status needs to be 'Yet To Start'. Do you need auto match the item???..")
			if(f) $("#status").val("Yet To Start");
			else alert("please correrct the input and then proceed");

			dateval= false;
			}
			
		}
		
		if(startdate < today)
		{	
			if( $("#status").val() === 'Yet To Start')
			{
				
				alert("For a project that started in past the status needs to be any of the following 'In Progress' , 'On Hold' , 'Closed'.  please correct your input and continue..");
				$("#status").val("select status");
				dateval = false;
			}
			
		}
		 
		if($("#status").val() === 'Closed')
		{
			if($("#enddate").val() === "")
			{
				$("#enddate").addClass("required");
				alert("For a closed project the end date is mandatory");
				$("#enddate").focus();
				dateval = false;
			}
			else 
				$("#enddate").removeClass("required");
			
		}
		 
		if($("#enddate").val() != '')
		{	
			let f=false;
			if($("#status").val() != 'Closed')
			{
				f= confirm("you already mensiond the end date. then the project status should be closed. Do you need to auto correct");
				dateval = false;
			}
			if(f)
				$("#status").val("Closed");

				
		}	
	return dateval;
}




	function currencycheck()	
	{		let currencyflag=true;
		function currencymatch(customer,currency)
		{
			if($("#customer").val()===customer)
				if($("#currency").val()===currency)
					currencyflag=true;
				else
					currencyflag=false;
		}	
		currencymatch("CodeObjects","USD");
		currencymatch("Regus","INR");
		currencymatch("TRL","GBP");
		currencymatch("Worldsmart","AUD");
		if(currencyflag===false)
		{
			alert("customer and currency dosen'n match");
			return false;
		}
		else
			return true;
	}

});



