var app = angular.module('blogie');

app.directive('bloglet', function(){
    var defObj = {
        restrict: 'C',
// 		controller: function ($scope) {
// 		    //console.log($scope);
// 		},
		templateUrl: 'partials/bloglet.html'
    };

    return defObj;
})