var API_key = "pmFmeC78sVzcqR0XlcIlnt5MTUi82reS";

var search = "football";
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" +API_key+"&limit=10";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response.data[0]);
    
    for(i=0;i<10;i++){
       var newGif = $("<img id = 'gif' width = 200px height = 200px>"); 
       newGif.attr("src", response.data[i].images.downsized_still.url);
       $("#gifs_container").append(newGif);
    }
    


});
