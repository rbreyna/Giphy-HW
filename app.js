
var API_key = "pmFmeC78sVzcqR0XlcIlnt5MTUi82reS";
var gifRating;
var motion = "still";
var harryPotter = ["Harry_Potter", "Hermione_Granger", "Ron_Weasley", "Severus_Snape", "Albus_Dumbledore", "Voldemort", "Hagrid", "Sirius_Black", "Draco_Malfoy", "Neville_Longbottom", "Hedwig"];

printButtons();

function printButtons() {

  $("#buttons").empty();

  for (i = 0; i < harryPotter.length; i++) {

    var character = harryPotter[i].replace(/_/g," ");
    var button = $("<button>");

    button.attr("class", "gif");
    button.html(character);
    button.attr("value",character);

    $("#buttons").append(button);

    //console.log(harryPotter[i]);
  }
}

function printGifs(name) {

  var search = name;
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + API_key + "&limit=10";

  console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    console.log(response);

    for (i = 0; i < 10; i++) {

      var gifBin = $("<div>");
      gifBin.attr("id", "images");

      var rating = response.data[i].rating;
      rating = "Rating: " + rating.toUpperCase();

      var newGif = $("<img id = 'gif'>");

      newGif.attr("data-still", response.data[i].images.downsized_still.url);
      newGif.attr("data-animate", response.data[i].url);
      newGif.attr("still-state", "still");
      newGif.attr("src", newGif.attr("data-still"));

      gifBin.html(rating + "<br>");
      gifBin.append(newGif);

      $("#gifs_container").append(gifBin);
    }

  });

}

$(document.body).on("click", ".gif", function () {

  //$("#gif_container").empty()

  search = $(this).val();
  //console.log(search);
  printGifs(search);
});


$(document.body).on("click", "#images", function () {

    if($(this).attr("still-state") === "still"){
      $(this).attr("src", "data-animate");
      $(this).attr("still-state", "animate");
    }

    if($(this).attr("still-state")=== "animate"){
      $(this).attr("src", "data-still");
      $(this).attr("still-state", "still");
    }
});

