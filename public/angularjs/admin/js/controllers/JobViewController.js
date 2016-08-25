'use strict';

/**
 * AngularJS default filter with the following expression:
 * "person in people | filter: {name: $select.search, age: $select.search}"
 * performs a AND between 'name: $select.search' and 'age: $select.search'.
 * We want to perform a OR.
 */

MetronicApp.controller('JobViewController', ['$rootScope', '$scope', 'settings', 'Job', 'fileUpload','$resource', '$location',  function($rootScope,   $scope, settings, Job, fileUpload, $resource, $location) {

    $scope.$on('$viewContentLoaded', function() {
        Metronic.initAjax(); // initialize core component
        $rootScope.settings.layout.pageSidebarClosed = false;
        $scope.refresh();
    });
    $scope.refresh = function(){
         $('#add').hide();
        $scope.jobs =Job.query();
    }
    $scope.add = function(){

        var job = new Job({
            'jtitle' : $scope.currentJobTitle,
            'jclosingtime': $scope.currentJobClosingTime,
            'jsalary' : $scope.currentJobSalary,
            'jtype' : $scope.currentJobType,
            'jlocation' : $scope.currentJobLocation,
            'jcategory' : $scope.currentJobCategory,
            'jcountry' : $scope.currentJobCountry,
            'joverview' : $scope.currentJobOverview,

        });

        job.$save(function (data) {

            var file = $scope.currentJobfile;
            var uploadUrl = "uploadfile";
            fileUpload.uploadFileToUrl(file, uploadUrl);

            $location.path('/jobview.html');
        }, function (err) {
            console.log(err);
        });


    }



    $scope.refresh();
}]);