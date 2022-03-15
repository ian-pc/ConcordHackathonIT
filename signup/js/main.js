(function($) {

	"use strict";

	$(".toggle-password").click(function() {

	  $(this).toggleClass("fa-eye fa-eye-slash");
	  var input = $($(this).attr("toggle"));
	  if (input.attr("type") == "password") {
	    input.attr("type", "text");
	  } else {
	    input.attr("type", "password");
	  }
	});

	function logSubmit(event) {
		console.log("fjeij");
	}

	const form = document.getElementById("password");
	form.addEventListener('submit', logSubmit);

})(jQuery);
