/**
 * Created by K on 7/4/2016.
 */

MetronicApp.controller('HeadController', function($rootScope, $scope, $http, $location,$state) {
    $scope.out=function () {
        $rootScope.authenticated = false;
        $location.path('error');
        $http.post('logout');
    }
});