console.log("movies.js is sourced");
//global search array
var searchResults= [];

$( document).ready(function(){
  console.log('bonesaw is ready!!!!!');
  //displayResults function
  var displayResults = function (){
    $('#resultsDiv').empty();
    alert("I'm afraid I can only display results featuring DOM");
    for (var i = 0; i < 6; i++) {
      $('#resultsDiv').append('<p><b>' + searchResults[ i ].Title + "</b> ("+ searchResults[ i ].Year+ ")</p>" );
      $('#resultsDiv').append('<img src="' + searchResults[ i ].Poster + '">');
    }
  };
  //serch button
  $( "#searchButton" ).on('click', function(){
    console.log('In searchButton onClick');

    //get user Input
    var movieName = $('#movieNameIn').val();
    //Empty search field check
    if(movieName ===""){
      $("#movieNameIn").fadeOut().fadeIn();
      $('#resultsDiv').html(' Enter a title to Search for a film.');
      $('#movieNameIn').focus();
      return;
    }// end empty field check
    console.log('searching for:', movieName);

    //omdb ApI search url
  var searchURL= " http://www.omdbapi.com/?s=fast&furious";
  console.log('searchURL:', searchURL);
  $.ajax({
    url: searchURL,
    dataType: "JSON",
    success: function(data){
      console.log('AJAX success Data:', data.Search);
      searchResults = data.Search;
      console.log('search results:', searchResults);
      displayResults();
      }//end Success

  });//end AJAX
  });
});
