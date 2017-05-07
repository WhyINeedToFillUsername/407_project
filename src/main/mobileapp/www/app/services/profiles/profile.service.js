(function() {
    'use strict';

    angular
        .module('tidyUpApp')
        .factory('ProfileService', ProfileService);

    ProfileService.$inject = ['$q', '$http', 'SERVER_URL'];

    function ProfileService($q, $http, SERVER_URL) {

        var dataPromise;

        var service = {
            getProfileInfo : getProfileInfo
        };

        return service;

        function getProfileInfo() {
            if (angular.isUndefined(dataPromise)) {
                dataPromise = $http.get(SERVER_URL + 'api/profile-info').then(function(result) {
                    if (result.data.activeProfiles) {
                        var response = {};
                        response.activeProfiles = result.data.activeProfiles;
                        response.inProduction = result.data.activeProfiles.indexOf("prod") !== -1;
                        response.swaggerDisabled = result.data.activeProfiles.indexOf("no-swagger") !== -1;
                        return response;
                    }
                });
            }
            return dataPromise;
        }
    }
})();
