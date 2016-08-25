angular.module('JobService', []).factory('Job', ['$resource',
    function ($resource) {
        return $resource('http://localhost:8085/project_laravel/public/job/:id', {
            id: '@id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);