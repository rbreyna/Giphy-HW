
var API_key = "pmFmeC78sVzcqR0XlcIlnt5MTUi82reS";
var gifRating;
var motion = "still";
var harryPotter = ["Harry_Potter", "Hermione_Granger", "Ron_Weasley", "Severus_Snape", "Albus_Dumbledore", "Voldemort", "Hagrid", "Draco_Malfoy", "Hedwig"];

printButtons();

function printButtons() {

  $("#buttons").empty();

  for (i = 0; i < harryPotter.length; i++) {

    var character = harryPotter[i].replace(/_/g, " ");
    var button = $("<button>");

    button.attr("class", "btn");
    button.html(character);
    button.attr("value", character);

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
      gifBin.attr("class", "images");

      var rating = response.data[i].rating;
      rating = "Rating: " + rating.toUpperCase();

      var newGif = $("<img class = 'gif'>");

      newGif.attr("data-still", response.data[i].images.fixed_height_still.url);
      newGif.attr("data-animate", response.data[i].images.fixed_height.url);
      newGif.attr("data-state", "still");
      newGif.attr("src", newGif.attr("data-still"));

      gifBin.html(rating + "<br>");
      gifBin.append(newGif);

      $("#gifs_container").prepend(gifBin);
    }
  });
}
$("#submit").on("click", function(){
  harryPotter.push($("#input-text").val().trim());
  console.log(harryPotter);
  printButtons();
})

$(document.body).on("click", ".btn", function () {

  search = $(this).val();
  //console.log(search);
  printGifs(search);
});


$(document.body).on("click", ".gif", function () {

  if ($(this).attr("data-state") === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
   // console.log($(this).attr("data-animate"));

  } else if ($(this).attr("data-state") === "animate"){
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});

