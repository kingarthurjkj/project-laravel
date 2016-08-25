angular.module('UserService', []).factory('User', ['$resource',
    function ($resource) {
        return $resource('http://localhost:8085/laravel/public/user/:id', {
            id: '@id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);