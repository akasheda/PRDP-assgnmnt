<<<<<<< HEAD
<<<<<<< HEAD
var app = angular.module("TrinetPlatform", ['ngRoute', 'chart.js']);
app.config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "./Partials/error.html"
		})
		.when("/page1", {
			controller: 'pieController',
			templateUrl: "./Partials/page1.html"
		})
		.when("/page2", {
			templateUrl: "./Partials/page2.html"
		})
		.when("/page3", {
			templateUrl: "./Partials/page3.html"
		})
		.when("/page4", {
			controller: 'pieController2',
			templateUrl: "./Partials/page4.html"
		})
		.when("/page5", {
			templateUrl: "./Partials/page5.html"
		})
		.when("/page6", {
			templateUrl: "./Partials/page3.html"
		})
		.when("/page7", {
			templateUrl: "./Partials/page3.html"
		})
		.when("/page8", {
			templateUrl: "./Partials/page3.html"
		});


=======
var app = angular.module("TrinetPlatform", ['ngRoute', 'chart.js']);
app.config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "./Partials/error.html"
		})
		.when("/page1", {
			controller: 'pieController',
			templateUrl: "./Partials/page1.html"
		})
		.when("/page2", {
			templateUrl: "./Partials/page2.html"
		})
		.when("/page3", {
			templateUrl: "./Partials/page3.html"
		})
		.when("/page4", {
			controller: 'pieController2',
			templateUrl: "./Partials/page4.html"
		})
		.when("/page5", {
			templateUrl: "./Partials/page5.html"
		})
		.when("/page6", {
			templateUrl: "./Partials/page3.html"
		})
		.when("/page7", {
			templateUrl: "./Partials/page3.html"
		})
		.when("/page8", {
			templateUrl: "./Partials/page3.html"
		});


>>>>>>> 4f74b7d400246f123529fbeba24a9f5e99659645
});
=======
var app = angular.module("TrinetPlatform", ['ngRoute', 'chart.js']);
app.config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "./Partials/error.html"
		})
		.when("/page1", {
			controller: 'pieController',
			templateUrl: "./Partials/page1.html"
		})
		.when("/page2", {
			templateUrl: "./Partials/page2.html"
		})
		.when("/page3", {
			templateUrl: "./Partials/page3.html"
		})
		.when("/page4", {
			controller: 'pieController2',
			templateUrl: "./Partials/page4.html"
		})
		.when("/page5", {
			templateUrl: "./Partials/page5.html"
		})
		.when("/page6", {
			templateUrl: "./Partials/page6.html"
		})
		.when("/page7", {
			templateUrl: "./Partials/page7.html"
		})
		.when("/page8", {
			controller: 'lineController1',
			templateUrl: "./Partials/page8.html"
		});


});
>>>>>>> part5to7view
