/**
 * Created by K on 7/4/2016.
 */

MetronicApp.controller('HeadController', function($rootScope, $scope, $http, $timeout) {
    $scope.out=function () {
        $http.post('/laravel/public/logout');

    }
});