angular.module('bloggie')
.directive('bloglet', function(){
    var defObj = {
        restrict: 'C',
		templateUrl: 'partials/bloglet.html'
    };

    return defObj;
})