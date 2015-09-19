define(["populate-songs", "populate-filter-forms"], function(populateSongs, filterForm) {

  return function(callback) {
    populateSongs.populateSongs(function(songObject) {
      require(['hbs!../templates/songs'], function(songTemplate) {
        $("#listOfSongs").html(songTemplate(songObject));
      });

      filterForm(songObject);
      callback(songObject);
    });
  };
});