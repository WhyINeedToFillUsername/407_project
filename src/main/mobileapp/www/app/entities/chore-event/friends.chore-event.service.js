(function () {
    'use strict';
    angular
        .module('tidyUpApp')
        .factory('FriendsChoreEvent', FriendsChoreEvent);

    FriendsChoreEvent.$inject = ['$resource', 'SERVER_URL'];

    function FriendsChoreEvent($resource, SERVER_URL) {
        var resourceUrl = SERVER_URL + 'api/friends-chore-events';

        return $resource(resourceUrl, {}, {
            'query': {
                method: 'GET',
                isArray: true}
        });
    }
})();
