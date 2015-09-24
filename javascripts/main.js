define(["jquery", "hbs", "dom-access", "populate-songs", "firebase"],
  function($, handlebars, domAccess, populateSongs, firebase) {

populateSongs.populateSongs(function(songs){
	require(['hbs!../templates/songs'], function(songTemplate) {
		console.log(songTemplate);
      $("#listOfSongs").html(songTemplate(songs));
  });

  require(['hbs!../templates/artists'], function(artistTemplate) {
  	console.log(artistTemplate);
  	console.log("old songs", songs);
    $("#artistDropdown").html(artistTemplate(songs));
    });

  require(['hbs!../templates/albums'], function(albumTemplate) {
  	console.log(albumTemplate);
  	console.log("old songs", songs);
    $("#albumDropdown").html(albumTemplate(songs));
    });
  });


	$(document).on("click", "a[id^='delete#']", function() {

		console.log(this.id, "https://brilliant-fire-4629.firebaseio.com/songs/" + this.id.split("#")[1] + ".json");

    $.ajax({
      url: "https://brilliant-fire-4629.firebaseio.com/songs/" + this.id.split("#")[1] + ".json",
      method: "DELETE",
      contentType: "application/json"
    }).done(function(song){
      console.log("Successfully deleted songs");
    });

  });
});  

