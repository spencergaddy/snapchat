'use strict';

angular.module('snapchatApp')
    .controller('MainCtrl', function($scope, $http) {
        $http.get('/api/byPhone/2-1212122').success(function(awesomeThings) {
            $scope.awesomeThings = awesomeThings;
        });
    });