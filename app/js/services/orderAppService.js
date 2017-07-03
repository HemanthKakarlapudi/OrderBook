
angular.module('orderBookApp').service('orderBookService',function($q,$http,$resource){

      var getInitialContractDetails = function(){
        return $resource('/getContractDetails').query().$promise;
               
      };
       return {
        getInitialContractDetails: getInitialContractDetails
      };
})
