'use strict';

angular.module('orderBookApp', [
    'ui.router'
]).config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('ìndex', {
        url: '/',
        templateUrl: 'views/contacts.html',
        controller: 'contactController'
    });

}).run(function () {

});
