
$(function() {

  $( "#startdate" ).datepicker();
  $( "#enddate" ).datepicker();
	
	let valflag = false;
	let currencyflag=true;
  $("#add").click(function(e){
  	 e.preventDefault();

	  if(validate())
	  {	  
		console.log("hellloooo");
		  if(currencycheck())
		  {
			  
			  	let project = new Object()
				project.pname = $("#pname").val();
				project.pcode = $("#pcode").val();
				project.currency= $("#currency").val();
				project.customer=$("#customer").val();
				project.customertype= "test";
				project.manager=$("#manager").val();
				project.status=$("#status").val();
				project.startdate=$("#startdate").val();
				project.enddate=$("#enddate").val();
				localStorage.setItem("project",JSON.stringify(project));
				alert("akjksskj");
				window.location.href = "display.html";
		  }
	  }
	  return false;
	});

	
	function validate() {

		addstyle("#manager","");
		addstyle("#pname","");
		addstyle("#pcode","");
		addstyle("#startdate","");
		addstyle("#enddate","");
		addstyle("#currency","select currency");
		addstyle("#customer","select customer");
		addstyle("#status","select status");
		addstyle("#ctype","");
		

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
		{	return true;
			
		}
	}

	function addstyle(id,value){
		if ( $(id).val() ===value ) {
			$(id).addClass("required");
			valflag = true;
		}
		else 
		{
			$(id).removeClass("required");
		}
	}

	function currencycheck()	
	{	
		console.log("DONE ");

		
		if($("#customer").val()==="CodeObjects")
		{
			if($("#currency").val()==="USD")
			{
				currencyflag=true;
			}
			else
				currencyflag=false;
		}

		if($("#customer").val()==="Regus")
		{
			if($("#currency").val()==="INR")
			{
				currencyflag=true;
			}
			else
				currencyflag=false;
		}

		if($("#customer").val()==="TRL")
		{
			if($("#currency").val()==="GBP")
			{
				currencyflag=true;
			}
			else
				currencyflag=false;
		}

		if($("#customer").val()==="Worldsmart")
		{
			if($("#currency").val()==="AUD")
			{
				currencyflag=true;
			}
			else
				currencyflag=false;
		}

		if(currencyflag===false)
		{
			alert("customer and currency dosen'n match");
			return false;
			
		}
		else
			return true;
	}

});



