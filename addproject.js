
$(function() {

  $( "#startdate" ).datepicker();
  $( "#enddate" ).datepicker();


	var valiadteflag = true;
	var currencyflag=true;
	let valflag = false;

  $("#add").click(function(e){
  	
	  validate();
	  
	 
	  if(valiadteflag === true)
	  {
		  currencycheck();
		  if(currencyflag=== true)
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
	});




  $("#clear").click(function(e){
  	e.preventDefault();
  		
  	clearall();
  		
  });

	function clearall(){
  		$("#pname").val(null);
	  	$("#pcode").val(null);
	  	$("#startdate").val(null);
		$("#enddate").val(null);
		$("#ctype").selected(null);
	   	$("#currency").val("select currency");
		$("#manager").val(null);
		$("#customer").val("select customer");
		$("#status").val("select status");
	   	$(".form-control").removeClass("required");
		$("#radio1").val(null);
	   }


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
			valiadteflag=false;
		}
		else
		{
			valiadteflag=true;
		}
	}



	function currencycheck()	
	{	
		
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
			// $("#curr").dialog({modal:true,
			// 			title: 'Warning',
			// 			width: 400,
			// 			buttons : {
			// 				Ok: function() {
			// 					$(this).dialog("close"); //closing on Ok click
			// 				}
			// 			}

			// 		});
			// e.preventDefault();
		}
		e.preventDefault();
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

	function test()
	{
		console.log("page 2");
	}

});



