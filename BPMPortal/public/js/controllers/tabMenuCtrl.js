/**
 * tabMenuCtrl - controller
 */
function tabMenuCtrl($scope) {
    start()

    function start() {
        $scope.getInclude = getInclude
        $scope.tabNumber = 1
        $scope.tabPage = "views/maintenance.html"
    }

    function getInclude(tabNumber) {
        if (tabNumber == 1) {
            $scope.tabPage = "views/error404.html"
        } else if (tabNumber == 2) {
            $scope.tabPage = "views/maintenance.html"
        } else if (tabNumber == 3) {
            $scope.tabPage = "views/maintenance.html"
        }
        else $scope.tabPage = "maintenance.html"
    }
}


angular
    .module('BPMPortal')
    .controller('tabMenuCtrl', tabMenuCtrl)