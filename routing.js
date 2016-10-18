var app = angular.module("TrinetPlatform", ['ngRoute']);
app.config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "./Partials/home.html"
		})
		.when("/scripting", {
			templateUrl: "./Partials/scripting.html"
		})
		.when("/vm", {
			templateUrl: "./Partials/vm.html"
		});

});