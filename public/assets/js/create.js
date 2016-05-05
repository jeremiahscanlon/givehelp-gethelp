
// when page finishes loading ...
$(document).ready (function(){

	// random number generator between 1 and 3
	var number = Math.floor(Math.random() * 3) + 1;
	// use number randomly generated to switch between 3 friend finder background images
	$('.jumbotron').css({
		'background-image':'url(assets/images/'+number+'.jpg)',
	});

	// function to be used later to send the info captured to the api and show the modal pop-up with the response
	function postToApi(){
		// the url created in the express routing for the api
		var url = 'http://localhost:4000/api/get-help';
		// jquery post request with the previously created "postObject", includes call back function with the data send from the server
		$.post(url, postObject, function(data){
			// add the name and image to the modal
			$('#modalBody').html('<p class="text-center">'+data.name+'</p>');
			$('#modalBody').append('<img class="center-block" src="'+data.photo+'" alt="'+data.name+'" style="max-width:100%">');
			// show the modal
			$('#myModal').modal('show');
			// reset the test 
			$( '#name' ).val('');
			$( '#imageURL' ).val('');
			$('.btn').removeClass('selcted');
		});
	};

	// upon click of the submit button
	$('#submit').click(function(){
		// capture the values from the name and imageURL fields.
		var name = $('#name').val().trim();
		var phone = $('#phone').val().trim();
		var email = $('#email').val().trim();
		var available = $('#available').val().trim();

		// down and dirty way to validate that the name and the image link have been given values.
		if(name){
			if(phone){
				if(available){

					// if both exist then create an object with captured data
					postObject = {
						name: name,
						phone: phone,
						email: email,
						available: available
					};
					console.log(postObject);
					// run the function to send to the api
					postToApi();

				} else {

					// if no imageURL then post reminder to enter it
					alert('Please enter your email address.');
				};
				

			} else {
				// if no imageURL then post reminder to enter it
				alert('Please enter phone number.');
			};
			
		} else {
			// if no name then post reminder to enter it
			alert('Please enter your name.');
		};
	});
});