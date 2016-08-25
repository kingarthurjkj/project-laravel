
/* Setup general page controller */
MetronicApp.controller('ApplyCheckController', ['$rootScope', '$scope',  'Apply','$http', 'settings','$stateParams', '$state',  '$resource', '$location',  function($rootScope,   $scope, Apply, $http,  $stateParams,$state, settings, $resource, $location) {
    $scope.$on('$viewContentLoaded', function() {   
    	// initialize core components
    	Metronic.initAjax();

    	// set default layout mode
        $rootScope.settings.layout.pageSidebarClosed = false;
    });

    // alert($state.id);///important ksb



    $scope.refresh = function(){
        $http.get('getapplyjob/'+$state.id).success(function(response){
            $scope.applys = response;
        });
    }
    $scope.accept = function(id){

        $http.post('posteraccept',{

            id : id

        }).then(function(response){
            $scope.refresh();
            alert('acceptsuccess');
        },function(response){

            alert('accepterror');
        });
    }

    $scope.cancel = function(id){

        $http.post('postercancel',{

            id : id

        }).then(function(response){
            $scope.refresh();
            alert('cancelsuccess');
        },function(response){

            alert('cancelerror');
        });
    }
    $scope.delete = function(id){

        $http.post('posterdelete',{

            id : id

        }).then(function(response){
            $scope.refresh();
            alert('deletesuccess');
        },function(response){

            alert('deleteerror');
        });
    }
    $scope.load = function(overview){

        $scope.currentOverview = overview;
        $('#overview').modal('toggle');

    }
    $scope.refresh();
}]);
