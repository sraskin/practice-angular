var awesomeToDo = angular.module('awesomeToDo', ['ngRoute']);

	awesomeToDo.config(function($routeProvider, $locationProvider) {
		$routeProvider

			// home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'homeController'
			})

			// login page
			.when('/login', {
				templateUrl : 'pages/login.html',
				controller  : 'authController'
			})

			// register page
			.when('/register', {
				templateUrl : 'pages/register.html',
				controller  : 'authController'
			})

			// edit profile page
			.when('/edit_profile', {
				templateUrl : 'pages/edit_profile.html',
				controller  : 'authController'
			});
	});

	awesomeToDo.controller('homeController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	awesomeToDo.controller('authController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	