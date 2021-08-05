//$(function(){
//	document.write("<h1>Hello world from jquery</h1>");
//});
$(document).ready(function() {
	$('div#selectors p').css('background-color', 'green');
	
	$('div#selectors2 p').css('background-color', 'lightgreen');
	
	$('h4').css('background-color', 'lightgray');
	
	$('div#attributes #phero').bind('click', function() {
		var heronameatt = $('div#attributes #phero').attr("title");
		$("div#attributes #heroname").text(heronameatt);
		$('#phero').hide();
	});
	
	$('div#attributes #heroname').bind('click', function() {
		$('div#attributes #heroname').addClass('selected');
	});
});

$('#ajaxPost').bind('onclick', function(){

	$.ajax({
		type: 'POST',
		data: JSON.stringify({test: 'test'}),
		contentType: 'application/json',
		url: 'http://localhost:3001/userPost',
		success: function(data){
			console.log("success: ");
			console.log(JSON.stringify(data));
		}
	});
});
$('#ajaxGet').bind('click', function(){
	$.ajax({
		type: 'Get',
		contentType: 'application/json',
		url: 'http://localhost:3001/userGet?userName=test & userAge=12',
		success: function(data){
			console.log("success: ");
			console.log(JSON.stringify(data));
		}
	});
});
	
