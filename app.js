var API_key = "pmFmeC78sVzcqR0XlcIlnt5MTUi82reS";

var search = "football";
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + API_key + "&limit=10";

var harryPotter=["Harry Potter", "Hermione Granger", "Ron Weasley", "Severus Snape", "Albus Dumbledore", ];
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
  console.log(response.data[0]);

  

  for (i = 0; i < 10; i++) {

    var gifBin = $("<div id ='gifBin'>");

    var gifRating = $("<span>")
    var rating = response.data[i].rating;
    gifRating.html("Rating: " + rating.toUpperCase() + "<br>");

    var newGif = $("<img id = 'gif'>");
    newGif.attr("src", response.data[i].images.downsized_still.url);

    $("#gifBin").append(gifRating);
    $("#gifBin").append(newGif);

    $("#gifs_container").append(gifBin);
  }



});
