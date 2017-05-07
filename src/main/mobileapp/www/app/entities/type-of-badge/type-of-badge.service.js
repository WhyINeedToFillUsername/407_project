(function() {
    'use strict';
    angular
        .module('tidyUpApp')
        .factory('TypeOfBadge', TypeOfBadge);

    TypeOfBadge.$inject = ['$resource', 'SERVER_URL'];

    function TypeOfBadge ($resource, SERVER_URL) {
        var resourceUrl = SERVER_URL + 'api/type-of-badges/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
