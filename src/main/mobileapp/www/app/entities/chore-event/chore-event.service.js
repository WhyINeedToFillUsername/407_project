(function() {
    'use strict';
    angular
        .module('tidyUpApp')
        .factory('ChoreEvent', ChoreEvent);

    ChoreEvent.$inject = ['$resource', 'DateUtils', 'SERVER_URL'];

    function ChoreEvent ($resource, DateUtils, SERVER_URL) {
        var resourceUrl = SERVER_URL + 'api/chore-events/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    data.dateTo = DateUtils.convertDateTimeFromServer(data.dateTo);
                    data.dateDone = DateUtils.convertDateTimeFromServer(data.dateDone);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
