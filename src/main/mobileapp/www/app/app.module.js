(function() {
    'use strict';

    angular
        .module('tidyUpApp', [
          'ionic',
            'ngStorage',
            'tmh.dynamicLocale',
            'pascalprecht.translate',
            'ngResource',
            'ngCookies',
            'ngAria',
            'ngCacheBuster',
            'ngFileUpload',
            'ui.bootstrap',
            'ui.bootstrap.datetimepicker',
            'ui.router',
            'infinite-scroll',
            // jhipster-needle-angularjs-add-module JHipster will add new module here
            'angular-loading-bar'
        ])
        .run(run);

    run.$inject = ['stateHandler', 'translationHandler'];

    function run(stateHandler, translationHandler) {
        stateHandler.initialize();
        translationHandler.initialize();
    }
})();


/*
 angular.module('starter', ['ionic'])

 .run(function($ionicPlatform) {
 $ionicPlatform.ready(function() {
 if(window.cordova && window.cordova.plugins.Keyboard) {
 // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
 // for form inputs)
 cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

 // Don't remove this line unless you know what you are doing. It stops the viewport
 // from snapping when text inputs are focused. Ionic handles this internally for
 // a much nicer keyboard experience.
 cordova.plugins.Keyboard.disableScroll(true);
 }
 if(window.StatusBar) {
 StatusBar.styleDefault();
 }
 });
 });

 */
