angular.module('bloggie')
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/home', {
        templateUrl:'partials/home.html',
        controller: 'homeCtrl'
    })
    .when('/about', {
        templateUrl:'partials/about.html',
        controller: 'aboutCtrl'
    })
    .when('/blog', {
        templateUrl:'partials/blog.html',
        controller: 'blogCtrl'
    })
    .when('/', {
        redirectTo: '/home'
    })
    .otherwise({
        redirectTo: '/'
    });        
}])