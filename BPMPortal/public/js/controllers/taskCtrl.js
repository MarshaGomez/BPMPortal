/**
 * taskCtrl - controller
 */
function taskCtrl($scope, taskService) {
    start()

    function start() {
        $scope.controversyList = null
    }

    function getTask(messageType) {
        taskService.getTask().then(function (result) {
            $scope.controversyList = result.data
        })
        getDocumentID(messageType)
    }

}

angular
    .module('BPMPortal')
    .controller('taskCtrl', taskCtrl)