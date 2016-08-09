/*
1.Create an Angular module.
2.Create an Angular controller.
3.Use the $http angular service to download the contents of topspots.json into your controller.
4.Use angular bindings to bind the locations to your view in your html.

EXTRAS
1.Move the $http call that retrieves the 'topspots.json' data file into a factory and inject it into your controller.
2.Can you create a form to add new locations to the topspots array?
3.Can you find an Angular plugin to show the locations on a google map?
*/

    angular.module("myApp", []);
	angular.module("myApp").controller('maincontroller', function($scope, $http) {

		$http.get("topspots.json").then(function (response) {
		$scope.names = response.data;

			});
	});


		