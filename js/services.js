var app = angular.module('myApp');

app.factory('transferService', function(){

    'use strict';

    var wordList = [];


    var saveList = function(word){

        return wordList.push(word);
    };

    return {

        saveList: saveList,
        wordList: wordList
    };

});