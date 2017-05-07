(function () {
    'use strict';
    angular
        .module('tidyUpApp')
        .factory('TodoChore', TodoChore);

    TodoChore.$inject = ['$resource', 'DateUtils', 'SERVER_URL'];

    function TodoChore($resource, DateUtils, SERVER_URL) {
        var resourceUrl = SERVER_URL + 'api/to-do/';

        return $resource(resourceUrl, {}, {
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.dateTo = DateUtils.convertDateTimeFromServer(data.dateTo);
                        data.dateDone = DateUtils.convertDateTimeFromServer(data.dateDone);
                    }
                    return data;
                }
            },
            'update': {method: 'PUT'}
        });
    }
})();
