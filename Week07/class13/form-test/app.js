$(document).ready(function () {

	$('#myForm').submit(function(event){
		var name = $('#name-input').val()
		$('#target').text(name);
		console.log(event.type);
		event.preventDefault();
		$('#name-input').val("");
			});
});