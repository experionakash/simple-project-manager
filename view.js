
$(function() {
  $("#back").click(function(e){
    e.preventDefault();

    window.location.href = "addproject.html";
  })
});

function getdata()
{
  let project;
  project =JSON.parse(localStorage.getItem("project"));   
  $("#tablebody").append('<tr><td>'+project.pname+'</td><td>'+project.pcode+'</td><td>'+project.currency+'</td><td>'+project.customer+'</td><td>'+project.customertype+'</td><td>'+project.manager+'</td><td>'+project.status+'</td><td>'+project.startdate+'</td><td>'+project.enddate+'</td></tr>');
}