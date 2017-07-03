angular.module('orderBookApp').controller('contactController', function($scope,orderBookService) {
$scope.message = 'Hello World!'; 

  $scope.init = function(){
  	getIntialContractDetails();
  }

         var  getIntialContractDetails = function() {

      $scope.message = '';

      console.log('**** Before calling Factory method ****');
      orderBookService.getInitialContractDetails()
                .then(
                    function(data) {

                    console.log('Forecast received for location : ',data);

                    $scope.contractDetails = data;
                    },
                    function(error) {
                      console.log('Failed to retreive forecast');

                      }
                );
    }; 
});  