(function() {
    'use strict';

    angular
        .module('tidyUpApp')
        .factory('PasswordResetInit', PasswordResetInit);

    PasswordResetInit.$inject = ['$resource', 'SERVER_URL'];

    function PasswordResetInit($resource, SERVER_URL) {
        var service = $resource(SERVER_URL + 'api/account/reset_password/init', {}, {});

        return service;
    }
})();
