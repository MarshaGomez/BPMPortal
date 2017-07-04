/**
 * BPMPortal - Responsive Admin Theme
 *
 * BPMPortal theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $urlRouterProvider.otherwise("/login");

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
            data: {
                pageTitle: 'Home page'
            }
        })
        .state('index.main', {
            url: "/main",
            templateUrl: "views/main.html",
            data: {
                pageTitle: 'Main Page'
            }
        })
        .state('404*', {
            url: "/404",
            templateUrl: "views/error404.html",
            data: {
                pageTitle: 'Error 404'
            }
        })
        .state('500', {
            url: "/500",
            templateUrl: "views/error500.html",
            data: {
                pageTitle: 'Error 500'
            }
        })
        .state('login', {
            url: "/login",
            templateUrl: "views/login.html",
            data: {
                pageTitle: 'Login',
                specialClass: 'login-bg'
            },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                            files: ['css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
                        },
                        {
                            name: 'cgNotify',
                            files: ['css/plugins/angular-notify/angular-notify.min.css', 'js/plugins/angular-notify/angular-notify.min.js']
                        }
                    ]);
                }
            }
        });
}
angular
    .module('BPMPortal')
    .config(config)
    .run(function ($rootScope, $state) {
        $rootScope.$state = $state;
    });