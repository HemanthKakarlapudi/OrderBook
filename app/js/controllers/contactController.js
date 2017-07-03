angular.module('orderBookApp').controller('contactController', function($scope,orderBookService,$interval ) {
$scope.message = 'Hello World!'; 

  $scope.init = function(){
     $scope.counter = 0;
     $interval(getIntialContractDetails, 10000, 10);
  }
  var  getIntialContractDetails = function() {

      $scope.message = '';

      console.log('**** Before calling Factory method ****');
      orderBookService.getInitialContractDetails()
                .then(
                    function(data) {
                      $scope.counter = $scope.counter + 1;

                    console.log('Forecast received for location : ',data);

                    $scope.contractDetails = data;
                    },
                    function(error) {
                      console.log('Failed to retreive forecast');

                      }
                );
    }; 
});  