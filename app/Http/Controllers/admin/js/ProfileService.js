angular.module('ProfileService', []).factory('Profile', ['$resource',
    function ($resource) {
        return $resource('http://localhost:8085/laravel/public/profile/:id', {
            id: '@id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);