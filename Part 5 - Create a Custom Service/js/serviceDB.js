angular.module('bloggie')
.service('blogDB', function($q, $http){
    var db = [];
    
    this.getDB = function(){
        var deferred = $q.defer();
        
        if (db.length > 0) {
           deferred.resolve(db); 
        } else {
            $http.get('data/blog.json').then(function(res){
                //console.log(res);
                db = res.data;
                deferred.resolve(db);
            }, function (err) {
                deferred.reject(err);
            });
        }
        
        return deferred.promise;
    };
    
    
    this.upvote = function (blogId) {
        for(var i in db) {
            if(db[i].id == blogId) {
                db[i].score++;
                break;
            }
        }
    };
    
    
    this.downvote = function (blogId) {
        for(var i in db) {
            if(db[i].id == blogId) {
                db[i].score--;
                break;
            }
        }
    };
    
    
});