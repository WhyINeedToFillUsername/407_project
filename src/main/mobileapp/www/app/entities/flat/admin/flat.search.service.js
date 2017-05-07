(function() {
    'use strict';

    angular
        .module('tidyUpApp')
        .factory('FlatSearch', FlatSearch);

    FlatSearch.$inject = ['$resource', 'SERVER_URL'];

    function FlatSearch($resource, SERVER_URL) {
        var resourceUrl = SERVER_URL + 'api/_search/flats/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
