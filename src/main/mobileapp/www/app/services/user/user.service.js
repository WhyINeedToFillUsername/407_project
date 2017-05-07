(function () {
    'use strict';

    angular
        .module('tidyUpApp')
        .factory('User', User);

    User.$inject = ['$resource', 'SERVER_URL'];

    function User ($resource, SERVER_URL) {
        var service = $resource(SERVER_URL + 'api/users/:login', {}, {
            'query': {method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'save': { method:'POST' },
            'update': { method:'PUT' },
            'delete':{ method:'DELETE'}
        });

        return service;
    }
})();
