angular.module('orderBookApp').controller('contactController', function($scope,orderBookService,$interval ) {
$scope.message = 'Hello World!'; 
$scope.contentLoad = false;
$scope.isUpdatesRequired = false;
$scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
  $scope.init = function(){
     $scope.counter = 0;
     $scope.newOrderDetilsObject = {
      quantity:'',
      defaultReturn:'',
      offsetAsk:'',
      offsetBid:'',
      instrument:''
     };

     $scope.isUpdatesRequired = true;
  $interval(isUpateRequired, 2000, 10);
   // getIntialContractDetails();
  }
  var  getIntialContractDetails = function() {

      $scope.message = '';
      orderBookService.getInitialContractDetails($scope.counter)
                .then(
                    function(data) {
                    $scope.counter = $scope.counter + 1;
                    $scope.contractDetails = data;
                    //$scope.contentLoad = true;
                    },
                    function(error) {
                      console.log('Failed to retreive forecast');

                      }
                );
    }; 

    var isUpateRequired = function(){
      if($scope.isUpdatesRequired){
          getIntialContractDetails();
      }
    };

     $scope.submit = function() {

       $scope.newOrderDetilsObject.instrument = $scope.contractDetails.strategyValues.instrument;
       orderBookService.updateOrderBidProcessDetails().then(function(response){
         $scope.contractDetails = response;
         $scope.contentLoad = true;
       });
      };
       $scope.isProcessToStop = function(){
          $scope.isUpdatesRequired = false;
      };
});  