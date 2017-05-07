(function() {
    'use strict';

    angular
        .module('tidyUpApp')
        .factory('ChoreTypeSearch', ChoreTypeSearch);

    ChoreTypeSearch.$inject = ['$resource', 'SERVER_URL'];

    function ChoreTypeSearch($resource, SERVER_URL) {
        var resourceUrl = SERVER_URL + 'api/_search/chore-types/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
