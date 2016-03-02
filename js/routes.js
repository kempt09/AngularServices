var app = angular.module('myApp');

app.config(function($routeProvider){
    'use strict';

    $routeProvider

        .when('/', {
        templateUrl: 'views/input.html',
        controller: 'input'
        })
        .when('/output', {
        templateUrl: 'views/output.html',
        controller: 'output'
        })
        .otherwise({
            redirectTo: '/'
        });
});