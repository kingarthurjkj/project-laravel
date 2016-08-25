angular.module('ProfileService', []).factory('Profile', ['$resource',
    function ($resource) {
        return $resource('http://localhost:8085/project_laravel/public/profile/:id', {
            id: '@id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);