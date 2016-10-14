var app = angular.module('ksn', ['ngRoute']);


app.config(function($routeProvider) {
    $routeProvider
     .when('/druguse', {
        templateUrl: 'views/druguse/druguse.html', 
       controller: 'druguseCtrl'
      })
		
		.otherwise( { redirectTo: '/' } );
});