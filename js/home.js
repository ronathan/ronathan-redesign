(function() {
	var homeProfile = $('#home-profile').waypoint({
		handler: function(direction) {
			$('#home-profile-picture').addClass("animated zoomIn");
			$('#home-profile-text').addClass("animated fadeInRight");
		}
	});

	var homeAboutMe = $('#home-about-me').waypoint({
		handler: function(direction) {
			$('#about-me-picture').removeClass("hidden").addClass("animated zoomIn");
			$('#about-me-text').removeClass("hidden").addClass("animated fadeInLeft");
		},
		offset: "50%"
	});

	var homeDevStack = $('#home-dev-stack').waypoint({
		handler: function(direction) {
			$('.dev-stack-item').removeClass("hidden").addClass("animated fadeInUp");
		},
		offset: "50%"
	});
})();