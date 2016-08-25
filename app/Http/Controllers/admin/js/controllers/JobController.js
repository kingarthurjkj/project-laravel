
/* Setup general page controller */
MetronicApp.controller('JobController', ['$rootScope', '$scope', 'settings', 'Job', '$resource', '$location',  function($rootScope,   $scope, settings, Job, $resource, $location) {
    $scope.$on('$viewContentLoaded', function() {   
    	// initialize core components
    	Metronic.initAjax();

    	// set default layout mode
        $rootScope.settings.layout.pageSidebarClosed = false;
    });



    $scope.refresh = function(){

        //$scope.books = $scope.booksResource.query();

        $scope.jobs =Job.query();
    }

    $scope.add = function(){

        var job = new Job({
            'jtitle' : $scope.currentJobTitle,
            'jclosingtime': $scope.currentJobClosingTime,
            'jsalary' : $scope.currentJobSalary,
            'jtype' : $scope.currentJobType,
            'jlocation' : $scope.currentJobLocation,
            'jcategory' : $scope.currentJobCategory

        });

        job.$save(function (res) {
            $scope.refresh();
            $location.path('/job.html');

        }, function (err) {
            console.log(err);
        });
    }

    $scope.delete = function(id){

        if(confirm('Are you sure to remove this book from your wishlist?')){
            var job = new Job;
            job.$delete({'id': id});

        }
        $scope.refresh();
    }

    $scope.edit = function (id) {

            var job1 = Job.get({'id': id});
        job1.id=$scope.currentJobId;
            job1.jtitle=$scope.currentJobTitle;
            job1.jclosingtime =$scope.currentJobClosingTime;
            job1.jsalary=$scope.currentJobSalary ;
            job1.jtype =$scope.currentJobType;
            job1.jlocation =$scope.currentJobLocation;
            job1.jcategory = $scope.currentJobCategory;
            job1.$update(function (res) {
                $scope.refresh();

            }, function (err) {
                console.log(err);
            });


    };

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

        });
        $('#edit').modal('toggle');

    }


    $scope.apply = function(id){

        $location.path('/apply/'+id);
    }
    $scope.refresh();
    
    
}]);
