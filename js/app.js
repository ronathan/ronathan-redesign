(function(){
	// Angular Code
	var app = angular.module('ronathan', []);

	app.controller("NavbarController", function() {
		this.navbar = 1;

		this.selectNavbar = function(setNavbar) {
			this.navbar = setNavbar;
		};

		this.isSelected = function(checkNavbar) {
			return this.navbar === checkNavbar;
		};
	});

	app.controller('DevStackController', function() {
		this.devStacks = devStacks;
	});

	app.directive('home', function() {
		return {
			restrict: "E",
			templateUrl: "../views/home.html"
		};
	});
	app.directive('blog', function() {
		return {
			restrict: "E",
			templateUrl: "../views/blog.html"
		};
	});
	app.directive('devStack', function() {
		return {
			restrict: "E",
			templateUrl: "../views/_devstack.html"
		};
	});

	var home = {

	};

	var blogs = {

	};

	var devStacks = [
		{
			type: "Languages",
			items: [
				"HTML/CSS",
				"JavaScript",
				"C#",
				"XAML",
				"Java",
				"Ruby"
			]
		},
		{
			type: "Frameworks",
			items: [
				"SASS / LESS",
				"NodeJS",
				"AngularJS",
				"Windows UWP",
				"Grails",
				"Rails"
			]
		},
		{
			type: "Other Tools",
			items: [
				"Git",
				"SQL",
				"AWS",
				"BASH"
			]
		}
	];
})();