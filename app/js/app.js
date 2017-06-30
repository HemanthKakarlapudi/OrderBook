'use strict';

angular.module('orderBookApp', [
    'ui.router',
    'ngResource'
]).config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('index', {
        url: '/',
        templateUrl: 'views/contacts.html',
        controller: 'contactController'
    });

}).run(function () {

});
