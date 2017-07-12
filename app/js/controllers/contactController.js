angular.module('orderBookApp').controller('contactController', function($scope,orderBookService,$interval ) {
$scope.message = 'Hello World!'; 
$scope.contentLoad = false;
$scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
  $scope.init = function(){
     $scope.counter = 0;
     
     //  $interval(getIntialContractDetails, 10000, 10);
     
    
    getIntialContractDetails();
  }
  var  getIntialContractDetails = function() {

      $scope.message = '';

      console.log('**** Before calling Factory method ****');
      orderBookService.getInitialContractDetails($scope.counter)
                .then(
                    function(data) {
                      $scope.counter = $scope.counter + 1;

                    console.log('Forecast received for location : ',data);

                    $scope.contractDetails = data;
                    $scope.contentLoad = true;
                    },
                    function(error) {
                      console.log('Failed to retreive forecast');

                      }
                );
    }; 
});  