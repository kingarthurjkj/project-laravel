'use strict';

MetronicApp.controller('MyJobController', ['$rootScope','$scope', '$http', 'settings', 'MyJob', 'fileUpload', '$resource', '$state',  function($rootScope,   $scope, $http, settings, MyJob, fileUpload,  $resource, $state ) {

    $scope.$on('$viewContentLoaded', function() {
        Metronic.initAjax(); // initialize core component
        $rootScope.settings.layout.pageSidebarClosed = false;
        $scope.refresh();
    });
    $scope.refresh = function(){

        $scope.jobs =MyJob.query();
        $scope.currentJobId ='';
        $scope.currentJobTitle='';
        $scope.currentJobClosingTime='';
        $scope.currentJobSalary='' ;
        $scope.currentJobType='';
        $scope.currentJobLocation='';
        $scope.currentJobCategory='';
        $scope.currentJobCountry='';
        $scope.currentJobOverview='';
        $scope.currentQuestion='';
        $('#edit').hide();
        $('#add').hide();
        $('#question').hide();
    }
    $scope.add = function(){

        var job = new MyJob({
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
            $scope.refresh();
        }, function (err) {

            console.log(err);
        });

        $scope.refresh();
    }
    $scope.delete = function(id){

        if(confirm('Are you sure to remove this book from your wishlist?')){

            var job = new MyJob;
            job.$delete({'id': id});
        }
        $scope.refresh();
    }

    $scope.edit = function (id) {

        var job1 = MyJob.get({'id': id});
        job1.id=$scope.currentJobId;
        job1.jtitle=$scope.currentJobTitle;
        job1.jclosingtime =$scope.currentJobClosingTime;
        job1.jsalary=$scope.currentJobSalary ;
        job1.jtype =$scope.currentJobType;
        job1.jlocation =$scope.currentJobLocation;
        job1.jcategory = $scope.currentJobCategory;
        job1.jcountry = $scope.currentJobCountry;
        job1.joverview= $scope.currentJobOverview;
        job1.$update(function (res) {

            var file = $scope.currentJobfile;
            var uploadUrl = "uploadfile";
            fileUpload.uploadFileToUrl(file, uploadUrl);
            $scope.refresh();
        }, function (err) {

            console.log(err);
            $scope.refresh();
        });
        $scope.refresh();

    };

    $scope.question = function (id) {


        $http.post('addquestion',
            {
                'id':id,
                'question':$scope.currentQuestion,
            }) .then(function(response){

            alert('success');
        },function(response){

            alert('error');
        });
        $scope.refresh();

    };
    $scope.check = function(id){

        $state.go('applycheck',{id :id});
        // $location.path('/applycheck/'+id);
    }
    $scope.load = function(id){

        MyJob.get({'id': id} ,function (job) {

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

        $('#edit').modal('toggle');
    }

    $scope.loadq = function(id){

        $scope.currentId = id;
        $scope.currentQuestion = '';
        $('#question').modal('toggle');

    }

    $scope.refresh();
}]);