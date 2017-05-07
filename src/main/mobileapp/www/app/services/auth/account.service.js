(function() {
    'use strict';

    angular
        .module('tidyUpApp')
        .factory('Account', Account);

    Account.$inject = ['$resource', 'SERVER_URL'];

    function Account ($resource, SERVER_URL) {
        var service = $resource(SERVER_URL + 'api/account', {}, {
            'get': { method: 'GET', params: {}, isArray: false,
                interceptor: {
                    response: function(response) {
                        // expose response
                        return response;
                    }
                }
            }
        });

        return service;
    }
})();
