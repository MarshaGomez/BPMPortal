/**
 * translateCtrl - Controller for translate
 */
function translateCtrl($translate, $scope, $rootScope) {
    $translate.use($rootScope.defaultLanguage)

    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey)
        $rootScope.defaultLanguage = langKey // Cambia la variable donde se almacena el lenguaje
    }
}

/**
 * Pass all controllers into module
 */
angular
    .module('BPMPortal')
    .controller('translateCtrl', translateCtrl)
