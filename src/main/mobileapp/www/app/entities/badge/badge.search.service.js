(function() {
    'use strict';

    angular
        .module('tidyUpApp')
        .factory('BadgeSearch', BadgeSearch);

    BadgeSearch.$inject = ['$resource', 'SERVER_URL'];

    function BadgeSearch($resource, SERVER_URL) {
        var resourceUrl = SERVER_URL + 'api/_search/badges/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
