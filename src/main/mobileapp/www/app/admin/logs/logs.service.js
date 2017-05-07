(function() {
    'use strict';

    angular
        .module('tidyUpApp')
        .factory('LogsService', LogsService);

    LogsService.$inject = ['$resource', 'SERVER_URL'];

    function LogsService ($resource, SERVER_URL) {
        var service = $resource(SERVER_URL + 'management/jhipster/logs', {}, {
            'findAll': { method: 'GET', isArray: true},
            'changeLevel': { method: 'PUT'}
        });

        return service;
    }
})();
