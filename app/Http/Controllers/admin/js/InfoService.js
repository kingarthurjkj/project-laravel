angular.module('InfoService', []).factory('Info', ['$resource',
    function ($resource) {
        return $resource('http://localhost:8085/laravel/public/info/:id', {
            id: '@id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);