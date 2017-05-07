(function() {
    'use strict';

    angular
        .module('tidyUpApp')
        .factory('Password', Password);

    Password.$inject = ['$resource', 'SERVER_URL'];

    function Password($resource, SERVER_URL) {
        var service = $resource(SERVER_URL + 'api/account/change_password', {}, {});

        return service;
    }
})();
