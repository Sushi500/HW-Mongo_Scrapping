$(document).ready(function () {

var topArticle = $(".results");

topArticle.hide();

//Click event for Search
$("body").on("click",".search", function() {
    console.log("SEARCHING...");
    topArticle.show();
    // var input = $(this).attr(".input");
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
      input + "&api-key=7ce37766719e46c4b25ed2dc2837eab3";
    
});

//Click event for Clear
$("body").on("click",".clear", function() {
    console.log("CLEARING...");
});


$.ajax({
  url: queryUrl,
  method: 'GET',
}).then(function(result) {
    var response = result.data;
  console.log(result);
}).fail(function(err) {
  throw err;
});