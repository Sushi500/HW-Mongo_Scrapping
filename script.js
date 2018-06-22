//Instructs computer to read HTML before running the javascript
$(document).ready(function(){

var results = $(".results");

results.hide();

$("body").on("click",".search", function() {
    console.log("SEARCHING...");
    results.show();
    
});

$("body").on("click",".clear", function() {
    console.log("CLEARING...");
});






});