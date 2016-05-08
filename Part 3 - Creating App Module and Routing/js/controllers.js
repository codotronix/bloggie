angular.module('bloggie')

.controller('mainCtrl', function($scope) {
    $scope.pageId = 'home';
})

.controller('blogCtrl', function($scope){
    $scope.$parent.pageId = 'blog';
})

.controller('homeCtrl', function($scope) {
    $scope.$parent.pageId = 'home';
})

.controller('aboutCtrl', function($scope) {
    $scope.$parent.pageId = 'about';
})