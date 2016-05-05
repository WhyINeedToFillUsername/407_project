(function() {
    'use strict';

    angular
        .module('tidyUpApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('flat', {
            parent: 'entity',
            url: '/flat?page&sort&search',
            data: {
                authorities: ['ROLE_ADMIN'],
                pageTitle: 'tidyUpApp.flat.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/flat/flats.html',
                    controller: 'FlatController',
                    controllerAs: 'vm'
                }
            },
            params: {
                page: {
                    value: '1',
                    squash: true
                },
                sort: {
                    value: 'id,asc',
                    squash: true
                },
                search: null
            },
            resolve: {
                pagingParams: ['$stateParams', 'PaginationUtil', function ($stateParams, PaginationUtil) {
                    return {
                        page: PaginationUtil.parsePage($stateParams.page),
                        sort: $stateParams.sort,
                        predicate: PaginationUtil.parsePredicate($stateParams.sort),
                        ascending: PaginationUtil.parseAscending($stateParams.sort),
                        search: $stateParams.search
                    };
                }],
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('flat');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('flat-detail', {
            parent: 'entity',
            url: '/flat/{id}',
            data: {
                authorities: ['ROLE_ADMIN'],
                pageTitle: 'tidyUpApp.flat.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/flat/flat-detail.html',
                    controller: 'FlatDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('flat');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'Flat', function($stateParams, Flat) {
                    return Flat.get({id : $stateParams.id});
                }]
            }
        })
        .state('flat.new', {
            parent: 'flat',
            url: '/new',
            data: {
                authorities: ['ROLE_ADMIN']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/flat/flat-dialog.html',
                    controller: 'FlatDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                name: null,
                                dateCreated: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('flat', null, { reload: true });
                }, function() {
                    $state.go('flat');
                });
            }]
        })
        .state('flat.edit', {
            parent: 'flat',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_ADMIN']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/flat/flat-dialog.html',
                    controller: 'FlatDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Flat', function(Flat) {
                            return Flat.get({id : $stateParams.id});
                        }]
                    }
                }).result.then(function() {
                    $state.go('flat', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('flat.delete', {
            parent: 'flat',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_ADMIN']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/flat/flat-delete-dialog.html',
                    controller: 'FlatDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Flat', function(Flat) {
                            return Flat.get({id : $stateParams.id});
                        }]
                    }
                }).result.then(function() {
                    $state.go('flat', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('registerflat', {
            parent: 'app',
            url: '/add/flat',
            data: {
                authorities: ['ROLE_USER'],
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/flat/user/flat.user-dialog.html',
                    controller: 'FlatUserDialogController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('flat');
                    return $translate.refresh();
                }],
                entity: function () {
                    return {
                        name: null,
                        dateCreated: null,
                        id: null
                    };
                }
            }
        });
    }

})();
