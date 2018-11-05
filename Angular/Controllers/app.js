var module = angular.module('myApp',[]);
module.factory('myService', function($http) {
return {
    getFoos: function() {
         //return the promise directly.
         return $http.get('https://api.mcmakler.de/v1/advertisements')
                   .then(function(result) { //callback asynchronously when reponse is available
                        return result.data.data.splice(42);

                    },
                    function(response) {//callback when error is there

                    });	 
    }
}
});
module.controller('myCtrl', function($scope, myService) {
    myService.getFoos().then(function(foos) {//eturn promise
        
        // $scope.foos = foos.splice(1,2);
        $scope.foos = foos.splice(0,9);
        $scope.ans = [];

        $scope.more = function(){
                $scope.foos = foos.slice(0, $scope.foos.length+9);
                console.log($scope.foos);
        }
        
        console.log($scope.foos);	
        // for(var i=9;i<100;i++){
        //  	$scope.foos = foos.data[i];
        //  	console.log(foos.data[i]);
        // }
        // $scope.sort = function(x){
        //     $scope.sortOrder = x;
        // }
    });
});