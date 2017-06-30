/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-undef */

// (function () {
//   'use strict';

//   angular.module('orderBookApp', ['ngResource'])
//     .factory('orderBookFactory', function ($q, $resource) {

//       var getInitialContractDetails = function () {

//         console.log('***** Inside Factory method getForecastUsingCity ****');

       
//         var apiBaseUrl = '/getContractDetails';

//         var deferred = $q.defer();

//         var resource = $resource(apiBaseUrl, null, {
//           get: {
//             method: 'GET'
//             }
//         });

//         resource.get(
//           function (response) {
//             deferred.resolve(response);
//           },
//           function (error) {
//             console.log('weatherAppService: error = ', error);
//             return deferred.reject(error);
//           }
//         );

//         return deferred.promise;
//       };

  
//       return {
//         getInitialContractDetails: getInitialContractDetails
//       };
//     });
// }());


angular.module('orderBookApp').service('orderBookService',function($q,$resource){

        var getInitialContractDetails = function () {

        console.log('***** Inside Factory method getForecastUsingCity ****');

       
        var apiBaseUrl = '/getContractDetails';

        var deferred = $q.defer();

        var resource = $resource(apiBaseUrl, null, {
          get: {
            method: 'GET'
            }
        });

        resource.get(
          function (response) {
            console.log(response)
            deferred.resolve(response);
          },
          function (error) {
            console.log('weatherAppService: error = ', error);
            return deferred.reject(error);
          }
        );

        return deferred.promise;
      };
       return {
        getInitialContractDetails: getInitialContractDetails
      };
})
