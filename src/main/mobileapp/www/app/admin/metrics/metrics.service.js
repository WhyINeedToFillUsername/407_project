(function() {
    'use strict';

    angular
        .module('tidyUpApp')
        .factory('JhiMetricsService', JhiMetricsService);

    JhiMetricsService.$inject = ['$rootScope', '$http', 'SERVER_URL'];

    function JhiMetricsService ($rootScope, $http, SERVER_URL) {
        var service = {
            getMetrics: getMetrics,
            threadDump: threadDump
        };

        return service;

        function getMetrics () {
            return $http.get(SERVER_URL + 'management/jhipster/metrics').then(function (response) {
                return response.data;
            });
        }

        function threadDump () {
            return $http.get(SERVER_URL + 'management/dump').then(function (response) {
                return response.data;
            });
        }
    }
})();
