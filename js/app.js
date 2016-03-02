(function(){
	// Angular Code
	var app = angular.module('ronathan', []);

	app.controller('HomeController', function() {
		this.home = home;
	});

	app.controller('BlogController', function() {
		this.blogs = blogs;
	});

	app.controller('DevStackController', function() {
		this.devStacks = devStacks;
	});

	app.directive('devStack', function() {
		return {
			restrict: 'E',
			templateUrl: '../views/dev-stack.html'
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