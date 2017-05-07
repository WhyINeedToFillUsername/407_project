(function () {
    'use strict';

    angular
        .module('tidyUpApp')
        .factory('Register', Register);

    Register.$inject = ['$resource', 'SERVER_URL'];

    function Register ($resource, SERVER_URL) {
        return $resource(SERVER_URL + 'api/register', {}, {});
    }
})();
