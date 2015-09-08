define (["jquery"], function($) {

	return{
		populateSongs: function(callback) {
			$.ajax({
			url:"./javascripts/songs.json"
			}).done(function(data){
			callback(data);
			});
		}
	};

});