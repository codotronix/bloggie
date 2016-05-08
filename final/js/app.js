var app = angular.module('blogie', ['ngRoute']);

app.service('blogDB', function($q, $http){
    var db = [];
    
    this.getDB = function(){
        //console.log('getDB function is hit...');
        var prom = $q.defer();
        
        if (db.length > 0) {
           prom.resolve(db); 
        } else {
            $http.get('data/blog.json').then(function(res){
                //console.log(res);
                db = res.data;
                prom.resolve(db);
            }, function (err) {
                prom.reject(err);
            });
        }
        
        return prom.promise;
    };
});


app.controller('mainCtrl', function($scope) {
    $scope.pageId = 'home';
});


app.controller('blogCtrl', function($scope, $http, blogDB){
    $scope.$parent.pageId = 'blog';
    
    //$scope.blogs = blogDB.getDB();
    
    blogDB.getDB().then(function(db){
        $scope.blogs = db;
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
});


app.controller('homeCtrl', function($scope, $location) {
    $scope.$parent.pageId = 'home';
    
    $scope.goToBlog = function(){
      $location.path('/blog');
    };
});

app.controller('aboutCtrl', function($scope) {
    $scope.$parent.pageId = 'about';
});