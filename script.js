$(document).ready(function () {


    

    $("button").on("click", function() {
        var button = $(this).attr(".btn");
        var input = $(this).attr(".input");
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" +
          input + "7ce37766719e46c4b25ed2dc2837eab3";
    });
$.ajax({
  url: queryUrl,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});




    


    





















});
