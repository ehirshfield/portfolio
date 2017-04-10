$(document).ready(function () {
   $('a[href^="#"]').on('click', function (event) {
       event.preventDefault();

       var target = this.hash,
           $target = $(target);

       $('html, body').stop().animate({
           'scrollTop': $target.offset().top
       }, 900, 'swing', function () {
           window.location.hash = target;
       });
   });


  $(".navbar").hide();

	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 100) {
				$('.navbar').fadeIn();
			} else {
				$('.navbar').fadeOut();
			}
		});
  });

 });
