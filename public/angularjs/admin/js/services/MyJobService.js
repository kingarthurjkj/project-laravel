angular.module('MyJobService', []).factory('MyJob', ['$resource',
    function ($resource) {
        return $resource('http://localhost:8085/project_laravel/public/myjob/:id', {
            id: '@id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);