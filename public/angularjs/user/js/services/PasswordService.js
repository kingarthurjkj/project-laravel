angular.module('PasService', []).factory('Pas', ['$resource',
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