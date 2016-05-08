var app = angular.module('blogie');

app.service('blogDB', function(){
    var db = [];
    
    this.getDB = function(){
        console.log('getDB function is hit...');
    };
})