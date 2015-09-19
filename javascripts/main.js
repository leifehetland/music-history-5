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


	$(document).on("click", "#delete", function() {
		$(this).parent().hide();
  });
});  

