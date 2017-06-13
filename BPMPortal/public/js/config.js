/**
 * BPMPortal - Responsive Admin Theme
 *
 * BPMPortal theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $urlRouterProvider.otherwise("/index/main");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider
        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "views/common/content.html"
        })
        .state('index.home', {
            url: "/home",
            templateUrl: "views/home.html",
            data: { pageTitle: 'Home page' }
        })
        .state('index.main', {
            url: "/main",
            templateUrl: "views/main.html",
            data: { pageTitle: 'Main Page' }
        });

}
angular
    .module('BPMPortal')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
