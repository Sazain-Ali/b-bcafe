//alert("hi");//


// light gallery//
			 $(document).ready(function() {
        $(".lightgallery").lightGallery(); 
    });


    //slider home page//
$('.slideshow').slick({
     		autoplay:true,
     		autoplayspeed:500,
     		  fade: true,
     		 cssEase: 'linear'
     		});
		

     		//form//
var name="abcdef";
var email="abc@gmail.com"

$('button').click(function(){
	var name=$('#name').val();
	console.log(name);

	var email=$('#email').val();
	console.log(email);

	//conditions for validation//
			//name//
		if (name == "") {
					$('#id').text("Empty!");
				}

				
				else{

				}


					//email//
		if (email == "") {
					$('#mail').text("Empty!");
				}

				else{

				}
					//successful//
				if(name != "" && email != ""){

						$.alert({
   	 					 title: 'Alert!',
  					  content: 'successful!',
						});
						}
				else{

				}


});
			
				

				


// discount animation//
//$('body').hover(function(){
//	$('#discount').fadeToggle();
//})


