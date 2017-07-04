
angular.module('orderBookApp').service('orderBookService',function($q,$http,$resource){



      var getInitialContractDetails = function(counter){
// var User = $resource('/getContractDetails/:counter', {counter:'@id'});

//                return User.get({counter:counter}).$promise;

var deferred  = $q.defer();


var data = {
 user_id:counter
};

var config = {
 params: data,
 headers : {'Accept' : 'application/json'}
};
console.log(config);                 
$http.get('/getContractDetails',config)
   .then(
       function(response){
         deferred.resolve(response.data);
       }, 
       function(response){
         deferred.reject(response);
       }
    );
   return deferred.promise;
      };
       return {
        getInitialContractDetails: getInitialContractDetails
      };
})
