define ([], function() {
	return {
		songReturn : function(songList) {
			for (var i = 0; i < songList.songs.length; i++) {
				var currentSong = songList.songs[i];
				var showSongs = "<li>";
				showSongs += "<h2>" + currentSong.title + "</h2>";
				showSongs += "<div>Performed by " + currentSong.artist +"</div>";
				showSongs += "<div>On the album " + currentSong.album + "</div>";
				showSongs += "<button id='delete'>Remove Song</button>";
				showSongs += "</l1>";
				$("#listOfSongs").append(showSongs);	
			}
		}
	};
});