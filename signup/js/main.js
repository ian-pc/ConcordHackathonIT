let google = require('googleapis');
let secretKey = require("./client_secret.json");
let jwtClient = new google.auth.JWT(
       secretKey.client_email,
       null,
       secretKey.private_key,
       ['https://www.googleapis.com/auth/spreadsheets']);
//authenticate request
jwtClient.authorize(function (err, tokens) {
 if (err) {
   console.log(err);
   return;
 } else {
   console.log("Successfully connected!");
 }
});

//Google Sheets API
let spreadsheetId = "101439903235207408405";
let sheetRange = 'Homepage_Data!A4:E4'
let sheets = google.sheets('v4');
let values = [["00004", "Jack","Smith", "1115748594", "jack.smith@gmail.com"]];
const sheetResource = {
  values,
};
sheets.spreadsheets.values.update({
   auth: jwtClient,
   spreadsheetId: spreadsheetId,
   range: sheetRange,
   resource: sheetResource
}, function (err, response) {
   if (err) {
       console.log('The API returned an error: ' + err);
   } else {
       console.log('Movie list from Google Sheets:');
       for (let row of response.values) {
           console.log('Title [%s]\t\tRating [%s]', row[0], row[1]);
       }
   }
});






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

	document.addEventListener("submit", function(e){
		e.preventDefault();    //stop form from submitting
		var nameValue = document.getElementById("email").value;
		console.log(nameValue);
	});

})(jQuery);
