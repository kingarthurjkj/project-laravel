angular.module('ApplyService', []).factory('Apply', ['$resource',
    function ($resource) {
        return $resource('http://localhost:8085/project_laravel/public/apply/:id', {
            id: '@id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);