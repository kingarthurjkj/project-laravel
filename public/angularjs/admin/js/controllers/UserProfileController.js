

    MetronicApp.controller('UserProfileController', ['$rootScope', '$scope', 'settings', 'Profile',  '$resource', '$location', function($rootScope, $scope, settings, Profile,  $resource, $location) {

        $scope.$on('$viewContentLoaded', function() {
            Metronic.initAjax(); // initialize core components
            Layout.setSidebarMenuActiveLink('set', $('#sidebar_menu_link_profile')); // set profile link active in sidebar menu
        });

        // set sidebar closed and body solid layout mode
        $rootScope.settings.layout.pageSidebarClosed = false;
        // //
        // // $http.get('laravel/public/getid')
        // //     .then(function(response) {
        // //         $scope.user = response;
        // //     });
        // $scope.booksResource = $resource("http://localhost:8085/laravel/public/uid/:id", { id: "@id" });
        // $scope.booksResource.get({'id': 1}).then(function (book) {
        //     alert(book);
        // });
        // var data = Uid.get({'id': 1});
        //

        // $scope.id = book.userid;

        // $scope.refresh=function(id){
        //     var data = Uid.get({'id': id});
        //         }

        $scope.firstname= 'asdfsdfasdf';
      // $scope.refresh(1);


    // $scope.save = function(){
    //
    //    // $scope.user_id= Session::get('user_id');
    //     var profile = new profile({
    //         'jtitle' : $scope.currentJobTitle,
    //         'jclosingtime': $scope.currentJobClosingTime,
    //         'jsalary' : $scope.currentJobSalary,
    //         'jtype' : $scope.currentJobType,
    //         'jlocation' : $scope.currentJobLocation,
    //         'jcategory' : $scope.currentJobCategory
    //
    //     });
    //
    //     job.$save(function (res) {
    //         $scope.refresh();
    //         $location.path('/job.html');
    //
    //     }, function (err) {
    //         console.log(err);
    //     });
    // }
}]);
