define (["jquery"], function($) {

	return{
		populateSongs: function(callback) {
			$.ajax({
			url:"https://brilliant-fire-4629.firebaseio.com/.json"
			}).done(function(data){
			callback(data);
			});
		}
	};
});