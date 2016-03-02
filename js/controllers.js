var app = angular.module('myApp', ['ngRoute']);

app.controller('input', function($scope, transferService, $location){

    'use strict';

    $scope.collect = function(){

        var arrayOfWords = [$scope.words.one, $scope.words.two, $scope.words.three, $scope.words.four];

        arrayOfWords.forEach(function(word){

            transferService.saveList(word);

        });

        $location.path('/output');

    };

    $scope.words = { one: '', two: '', three:'', four: ''};

});





app.controller('output', function($scope, transferService){

    'use strict';

    $scope.words = transferService.wordList;


});