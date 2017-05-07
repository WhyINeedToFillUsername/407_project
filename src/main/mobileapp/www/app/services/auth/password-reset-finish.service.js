(function() {
    'use strict';

    angular
        .module('tidyUpApp')
        .factory('PasswordResetFinish', PasswordResetFinish);

    PasswordResetFinish.$inject = ['$resource', 'SERVER_URL'];

    function PasswordResetFinish($resource, SERVER_URL) {
        var service = $resource(SERVER_URL + 'api/account/reset_password/finish', {}, {});

        return service;
    }
})();
