if ( $('.slider').length ) {

	$('.slider').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 991,
	      settings: {
	        arrows: true,
	        slidesToShow: 1
	      }
	    }
	  ]
	});

}

$(".slide").on( "click", function() {

	var slideNumber = $(this).attr("data-slide");

	console.log(slideNumber);

	$(".modal[data-slide='" + slideNumber + "']").addClass("open")

});

$(".modal").on( "click", function() {

	$(this).removeClass("open");

});