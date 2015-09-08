define (["jquery"], function($) {

	return{
		getMoreSongs: function(callback) {
			console.log('get more songs called');
			$.ajax({
      url:"./javascripts/moresongs.json"
      }).done(function(data){
			callback(data);
			});
		}
	};

});