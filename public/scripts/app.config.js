angular.module('routeApp')
       .config(function($routeProvider, $locationProvider) {
         $routeProvider.when('/rand', {
           templateUrl: 'views/rand.html'
         }).when('/mat', {
           templateUrl: 'views/mat.html'
         }).when('/perrin', {
           templateUrl: 'views/perrin.html'
         });

         $locationProvider.html5Mode(true);
       });
