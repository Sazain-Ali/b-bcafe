
		//Form Validation//
     				('button').click(function(){
	                 var name = $('#name').val();
	                 console.log(name);

	                 var email = $('#email').val();
	                 console.log(email);

	                if (name == "") {
					$('#id').text("Empty!");
				    }

				    if (email == "") {
					$('#mail').text("Empty!");
				    }

				    if(name != "" && email != ""){
			          $.alert({
					  title: 'Your form has been submitted!',
  					  content: 'Thank You for contacting us.We will get back to you.',
					});
			      }
			  })
