(function() {
    'use strict';
    angular
        .module('tidyUpApp')
        .factory('ChoreType', ChoreType);

    ChoreType.$inject = ['$resource', 'SERVER_URL'];

    function ChoreType ($resource, SERVER_URL) {
        var resourceUrl = SERVER_URL + 'api/chore-types/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
