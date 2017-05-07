(function() {
    'use strict';
    angular
        .module('tidyUpApp')
        .factory('Flat', Flat);

    Flat.$inject = ['$resource', 'DateUtils', 'SERVER_URL'];

    function Flat ($resource, DateUtils, SERVER_URL) {
        var resourceUrl = SERVER_URL + 'api/flats/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    data.dateCreated = DateUtils.convertDateTimeFromServer(data.dateCreated);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
