(function() {
	var waypoints = $('#home-profile').waypoint({
		handler: function(direction) {
			$('#home-profile-picture').addClass("animated zoomIn");
			$('#home-profile-text').addClass("animated fadeInRight");
		}
	});

	var waypoints = $('#home-about-me').waypoint({
		handler: function(direction) {
			$('#about-me-picture').addClass("animated zoomIn");
			$('#about-me-text').addClass("animated fadeInLeft");
		},
		offset: "50%"
	});
})();