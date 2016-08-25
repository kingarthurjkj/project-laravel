/* Setup Rounting For All Pages */
MetronicApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    // Redirect any unmatched url
    $urlRouterProvider.otherwise("/job.html");

    $stateProvider


        // Advanced Datatables
        .state('datatablesAdvanced', {
            url: "/job.html",
            templateUrl: "angularjs/admin/views/datatables/job.html",
            data: {pageTitle: 'Advanced Datatables'},
            controller: "JobController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            'assets/global/plugins/select2/select2.css',
                            'assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.css',
                            'assets/global/plugins/datatables/extensions/Scroller/css/dataTables.scroller.min.css',
                            'assets/global/plugins/datatables/extensions/ColReorder/css/dataTables.colReorder.min.css',

                            'assets/global/plugins/select2/select2.min.js',
                            'assets/global/plugins/datatables/all.min.js',
                            'angularjs/admin/js/scripts/table-advanced.js',

                            'angularjs/admin/js/controllers/JobController.js',

                            //date picker
                            'assets/global/plugins/bootstrap-datepicker/css/datepicker3.css',
                            'assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/admin/pages/scripts/components-pickers.js',
                            //touch spin

                            'assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css',
                            'assets/global/plugins/jquery-tags-input/jquery.tagsinput.css',
                            'assets/global/plugins/bootstrap-markdown/css/bootstrap-markdown.min.css',
                            'assets/global/plugins/typeahead/typeahead.css',

                            'assets/global/plugins/fuelux/js/spinner.min.js',
                            'assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js',
                            'assets/global/plugins/jquery-inputmask/jquery.inputmask.bundle.min.js',
                            'assets/global/plugins/jquery.input-ip-address-control-1.0.min.js',
                            'assets/global/plugins/bootstrap-pwstrength/pwstrength-bootstrap.min.js',
                            'assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js',
                            'assets/global/plugins/jquery-tags-input/jquery.tagsinput.min.js',
                            'assets/global/plugins/bootstrap-maxlength/bootstrap-maxlength.min.js',
                            'assets/global/plugins/bootstrap-touchspin/bootstrap.touchspin.js',
                            'assets/global/plugins/typeahead/handlebars.min.js',
                            'assets/global/plugins/typeahead/typeahead.bundle.min.js',
                            'assets/admin/pages/scripts/components-form-tools.js'


                        ]
                    });
                }]
            }
        })

        // // Editable Datatables
        // .state('datatablesAdvanced', {
        //     url: "/datatables/advanced.html",
        //     templateUrl: "angularjs/admin/views/datatables/table_editable.html",
        //     data: {pageTitle: 'Advanced Datatables'},
        //     controller: "GeneralPageController",
        //     resolve: {
        //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
        //             return $ocLazyLoad.load({
        //                 name: 'MetronicApp',
        //                 insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
        //                 files: [
        //                'assets/global/plugins/select2/select2.css',
        //                     'assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.css',
        //                 'assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css',
        //                 'assets/global/plugins/jquery-ui/jquery-ui.min.js',
        //                 'assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js',
        //                 'assets/global/plugins/select2/select2.min.js',
        //                 'assets/global/plugins/datatables/media/js/jquery.dataTables.min.js',
        //                 'assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js',
        //                 'assets/admin/pages/scripts/table-editable.js',
        //                     'assets/admin/layout2/css/themes/grey.css',
        //                     'assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js',
        //                 'angularjs/admin/js/controllers/GeneralPageController.js'
        //                 ]
        //             });
        //         }]
        //     }
        // })

        // Ajax Datetables
        .state('datatablesAjax', {
            url: "/datatables/ajax.html",
            templateUrl: "angularjs/admin/views/datatables/ajax.html",
            data: {pageTitle: 'Ajax Datatables'},
            controller: "GeneralPageController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            'assets/global/plugins/select2/select2.css',
                            'assets/global/plugins/bootstrap-datepicker/css/datepicker.css',
                            'assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.css',

                            'assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/global/plugins/select2/select2.min.js',
                            'assets/global/plugins/datatables/all.min.js',

                            'assets/global/scripts/datatable.js',
                            'angularjs/admin/js/scripts/table-ajax.js',

                            'angularjs/admin/js/controllers/GeneralPageController.js'
                        ]
                    });
                }]
            }
        })

        // User Profile
        .state("dashboard", {
            url: "/dashboard",
            templateUrl: "angularjs/admin/views/profile/dashboard.html",
            data: {pageTitle: 'User Profile'},
            controller: "UserProfileController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            'assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css',
                            'assets/admin/pages/css/profile.css',
                            'assets/admin/pages/css/tasks.css',

                            'assets/global/plugins/jquery.sparkline.min.js',
                            'assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js',

                            'assets/admin/pages/scripts/profile.js',

                            'angularjs/admin/js/controllers/UserProfileController.js'
                        ]
                    });
                }]
            }
        })

         // User Profile Account

        .state("account", {
            url: "/account",
            templateUrl: "angularjs/admin/views/profile/account.html",
            data: {pageTitle: 'User acount'},
            controller: "AccountController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            'assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css',
                            'assets/admin/pages/css/profile.css',
                            'assets/admin/pages/css/tasks.css',

                            'assets/global/plugins/jquery.sparkline.min.js',
                            // 'assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput1.js',

                            'assets/admin/pages/scripts/profile.js',
                            ////////////////////////////
                            'assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css',
                            'assets/global/plugins/jquery-tags-input/jquery.tagsinput.css',
                            'assets/global/plugins/bootstrap-markdown/css/bootstrap-markdown.min.css',
                            'assets/global/plugins/typeahead/typeahead.css',

                            'assets/global/plugins/fuelux/js/spinner.min.js',
                            'assets/global/plugins/jquery-inputmask/jquery.inputmask.bundle.min.js',
                            'assets/global/plugins/jquery.input-ip-address-control-1.0.min.js',
                            'assets/global/plugins/bootstrap-pwstrength/pwstrength-bootstrap.min.js',
                            'assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js',
                            'assets/global/plugins/jquery-tags-input/jquery.tagsinput.min.js',
                            'assets/global/plugins/bootstrap-maxlength/bootstrap-maxlength.min.js',
                            'assets/global/plugins/bootstrap-touchspin/bootstrap.touchspin.js',
                            'assets/global/plugins/typeahead/handlebars.min.js',
                            'assets/global/plugins/typeahead/typeahead.bundle.min.js',
                            'assets/admin/pages/scripts/components-form-tools.js',

                            'angularjs/admin/js/controllers/AccountController.js'
                        ]
                    });
                }]
            }
        })

        // User Profile Help

        .state("help", {
            url: "/help",
            templateUrl: "angularjs/admin/views/profile/help.html",
            data: {pageTitle: 'User help'},
            controller: "UserProfileController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            'assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css',
                            'assets/admin/pages/css/profile.css',
                            'assets/admin/pages/css/tasks.css',

                            'assets/global/plugins/jquery.sparkline.min.js',
                            'assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js',

                            'assets/admin/pages/scripts/profile.js',

                            'angularjs/admin/js/controllers/UserProfileController.js'
                        ]
                    });
                }]
            }
        })



}]);