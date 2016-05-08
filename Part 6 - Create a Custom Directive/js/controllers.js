angular.module('bloggie')

.controller('mainCtrl', function($scope) {
    $scope.pageId = 'home';
})

.controller('homeCtrl', function($scope) {
    $scope.$parent.pageId = 'home';
})

.controller('aboutCtrl', function($scope) {
    $scope.$parent.pageId = 'about';
})

.controller('blogCtrl', function($scope, $http, blogDB){
    $scope.$parent.pageId = 'blog';
    
    //$scope.blogs = blogDB.getDB();
    
    blogDB.getDB().then(function(db){
        $scope.blogs = db;
    }, function(err){
        console.log(err);
    });
    
    $scope.upvote = blogDB.upvote;
    
    $scope.downvote = blogDB.downvote;
})