requirejs.config({
  baseUrl: './javascripts',
  paths: {
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min"
  },
  shim: {
    "bootstrap": ["jquery"]
  }
});

requirejs(
  ["jquery", "bootstrap", "loadSongs"], 
  function($, bootstrap, loadSongs) {
    var selectedArtist = "", selectedAlbum = "";

    loadSongs(function(obj) {
      console.log("allSongsObject",obj);
    });

    $(document).on("click", "#artists li > a", function(e){
      selectedArtist = this.innerHTML;
    });

    $(document).on("click", "#albums li > a", function(e){
      selectedAlbum = this.innerHTML;
    });

    $("#addSong").click(function(e) {

      var newSong = {
        "title": $("#songTitle").val(),
        "artist": $("#artistName").val(),
        "album": $("#albumName").val()  
      };

      console.log("newSong",newSong);

      // return false;

      $.ajax({
        url: "https://brilliant-fire-4629.firebaseio.com/songs.json",
        method: "POST",
        data: JSON.stringify(newSong)
      }).done(function(addedSong) {
        selectedArtist = "";
        selectedAlbum = "";
        console.log("Your new song is", addedSong);
      });
    });


  }
);