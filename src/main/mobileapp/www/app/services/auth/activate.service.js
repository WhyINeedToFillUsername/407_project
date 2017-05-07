(function() {
    'use strict';

    angular
        .module('tidyUpApp')
        .factory('Activate', Activate);

    Activate.$inject = ['$resource', 'SERVER_URL'];

    function Activate ($resource, SERVER_URL) {
        var service = $resource(SERVER_URL + 'api/activate', {}, {
            'get': { method: 'GET', params: {}, isArray: false}
        });

        return service;
    }
})();
