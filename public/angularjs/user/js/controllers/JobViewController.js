'use strict';

/**
 * AngularJS default filter with the following expression:
 * "person in people | filter: {name: $select.search, age: $select.search}"
 * performs a AND between 'name: $select.search' and 'age: $select.search'.
 * We want to perform a OR.
 */

MetronicApp.controller('JobViewController', ['$rootScope', '$scope', 'settings', 'Job', 'Apply', 'fileUpload','$resource', '$location',  function($rootScope,   $scope, settings, Job, Apply, fileUpload, $resource, $location) {

    $scope.$on('$viewContentLoaded', function() {
        Metronic.initAjax(); // initialize core component
        $rootScope.settings.layout.pageSidebarClosed = false;

    });
    $scope.refresh = function(){
         $('#apply').hide();
        $scope.jobs =Job.query();
    }
    $scope.apply = function(id){

        var apply = new Apply({
            'aoverview' : $scope.currentApplyOverview,
            'jobid': id,
        });
        alert(apply.id);
        apply.$save(function (data) {

            var file = $scope.currentApplyfile;
            var uploadUrl = "applyfile";
            fileUpload.uploadFileToUrl(file, uploadUrl);

            $location.path('/jobview.html');
        }, function (err) {
            console.log(err);
        });
        $scope.refresh();

    }
    $scope.load = function(id){

        Job.get({'id': id} ,function (job) {

            $scope.job1=job;
            $scope.currentJobId = $scope.job1.id;
            $scope.currentJobTitle = $scope.job1.jtitle;
            $scope.currentJobClosingTime = $scope.job1.jclosingtime;
            $scope.currentJobSalary = $scope.job1.jsalary;
            $scope.currentJobType = $scope.job1.jtype;
            $scope.currentJobLocation = $scope.job1.jlocation;
            $scope.currentJobCategory = $scope.job1.jcategory;
            $scope.currentJobCountry=$scope.job1.jcountry;
            $scope.currentJobOverview=$scope.job1.joverview;
            $scope.currentJobfile=$scope.job1.fileurl;
        });

        $('#apply').modal('toggle');
    }



    $scope.refresh();
}]);