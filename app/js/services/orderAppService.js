
angular.module('orderBookApp').service('orderBookService',function($q,$http,$resource){



      var getInitialContractDetails = function(counter){
// var resource = $resource('/getContractDetails/:counter');
// return resource.query({counter:counter}).$promise;

         var deferred  = $q.defer();
          var data = {
           user_id:counter
          };

          var config = {
           params: data,
           headers : {'Accept' : 'application/json'}
          };
             $http.get('/getContractDetails',config).then(function(response){
               deferred.resolve(response.data);
             }, 
             function(response){
               deferred.reject(response);
             }
          );
           return deferred.promise;
         };


           var updateOrderBidProcessDetails = function(orderObject){
             var deferred  = $q.defer();
                var resource = $resource('/updateOrderDetails');
                 resource.save(orderObject,function(response){
                  deferred.resolve(response);
                 });
                 return deferred.promise;
         };
          return {
              getInitialContractDetails: getInitialContractDetails,
              updateOrderBidProcessDetails: updateOrderBidProcessDetails
          };          
})
