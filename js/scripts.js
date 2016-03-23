$(document).ready(function() {

 $("form#info").submit(function(event){

	var name = $("#name").val();
	var occupation = $("#occupation").val();
  var location = $("#location").val();
  var food = $("#food").val();
  var band = $("input:radio[name=band]:checked").val();
  var born = $("#born").val();

	$("#nameResult").text(name);
	$("#occupationResult").text(occupation);
  $("#locationResult").text(location);
  $("#foodResult").text(food);
  $("#bandResult").text(band);
  $("#bornResult").text(born);
  $("#foodResult").text(band);

	$(".surveyresult").show();

	event.preventDefault();

	});
});
