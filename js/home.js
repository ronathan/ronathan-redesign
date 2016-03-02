(function() {
	var waypoints = $('#home-profile').waypoint({
		handler: function(direction) {
			$('#home-profile-picture').addClass("animated zoomIn");
			$('#home-profile-text').addClass("animated fadeInRight");
		}
	});

	var waypoints = $('#home-about-me').waypoint({
		handler: function(direction) {
			$('#about-me-picture').removeClass("hidden").addClass("animated zoomIn");
			$('#about-me-text').removeClass("hidden").addClass("animated fadeInLeft");
		},
		offset: "50%"
	});
})();