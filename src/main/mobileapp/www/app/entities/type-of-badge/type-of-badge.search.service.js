(function() {
    'use strict';

    angular
        .module('tidyUpApp')
        .factory('TypeOfBadgeSearch', TypeOfBadgeSearch);

    TypeOfBadgeSearch.$inject = ['$resource', 'SERVER_URL'];

    function TypeOfBadgeSearch($resource, SERVER_URL) {
        var resourceUrl = SERVER_URL + 'api/_search/type-of-badges/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
