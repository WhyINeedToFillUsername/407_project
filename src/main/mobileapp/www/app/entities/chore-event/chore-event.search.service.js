(function() {
    'use strict';

    angular
        .module('tidyUpApp')
        .factory('ChoreEventSearch', ChoreEventSearch);

    ChoreEventSearch.$inject = ['$resource', 'SERVER_URL'];

    function ChoreEventSearch($resource, SERVER_URL) {
        var resourceUrl = SERVER_URL + 'api/_search/chore-events/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
