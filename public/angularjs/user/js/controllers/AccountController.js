

MetronicApp.controller('AccountController', ['$rootScope', '$scope', '$http', 'imageUpload','settings', 'Info', 'Profile', '$location',  function($rootScope, $scope,$http, imageUpload, settings, Info, Profile,Pas, $location) {

    $scope.$on('$viewContentLoaded', function() {
        Metronic.initAjax(); // initialize core components
        Layout.setSidebarMenuActiveLink('set', $('#sidebar_menu_link_profile')); // set profile link active in sidebar menu
    });

    $rootScope.settings.layout.pageSidebarClosed = false;

    var id;
    //get userid
    Info.get({'id': 1} ,function (info1) {

        $scope.info1=info1;
        $scope.id = $scope.info1.infoid;
        id= $scope.info1.infoid;
        $scope.refresh(id);
    });

    $scope.refresh=function (id) {

        Profile.get({'id': id} ,function (profile1) {

            $scope.profile1=profile1;
            $scope.firstname = $scope.profile1.firstname;
            $scope.lastname = $scope.profile1.lastname;
            $scope.mobilenumber = $scope.profile1.mobilenumber;
            $scope.interest = $scope.profile1.interest;
            $scope.occupation = $scope.profile1.occupation;
            $scope.about = $scope.profile1.about;
            $scope.websiteurl = $scope.profile1.websiteurl;
            $scope.imgurl = $scope.profile1.imgurl;

        });

        $scope.currentpassword='';
        $scope.password='';
        $scope.repassword='';

    }

    $scope.save = function (id) {

        Profile.get({'id': id},function (profile1) {

            alert(profile1.firstname);
            profile1.firstname=$scope.firstname;
            profile1.lastname =$scope.lastname;
            profile1.mobilenumber=$scope.mobilenumber ;
            profile1.interest =$scope.interest;
            alert($scope.interest);
            profile1.occupation =$scope.occupation;
            profile1.about = $scope.about;
            profile1.websiteurl = $scope.websiteurl;
            profile1.imgurl = $scope.imgurl;

            profile1.$update(function (res) {

                $scope.refresh(id);

            }, function (err) {

                console.log(err);
            });
        });

    }
    $scope.getimage = function (id) {

        var file = $scope.image;

        var uploadUrl = "image";

        imageUpload.uploadFileToUrl(file, uploadUrl);
        $scope.refresh(id);
    };

    $scope.change = function (id) {


        if($scope.password==$scope.repassword){

            $http.post('password',{
                id: id,
                password: $scope.password,
                currentpassword: $scope.currentpassword
            }).then(function(response){

                alert('success');
            },function(response){

                alert('error');
            });
        }
        else{

            alert('incorrect');
        }
        $scope.refresh(id);


    };

}]);
