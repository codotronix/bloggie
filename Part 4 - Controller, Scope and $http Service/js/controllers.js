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

.controller('blogCtrl', function($scope, $http){
    $scope.$parent.pageId = 'blog';
    
    //$scope.blogs = blogDB.getDB();
    
    $http.get('data/blog.json').then(function(res){
        $scope.blogs = res.data;
    }, function(err){
        console.log(err);
    });
    
    $scope.upvote = function (blogId) {
        for(var i in $scope.blogs) {
            if($scope.blogs[i].id == blogId) {
                $scope.blogs[i].score++;
                break;
            }
        }
    };
    
    $scope.downvote = function (blogId) {
        for(var i in $scope.blogs) {
            if($scope.blogs[i].id == blogId) {
                $scope.blogs[i].score--;
                break;
            }
        }
    };
})