/***********************************************
* taskService.js - service 
**********************************************/

function taskService($http) {
    this.getTask = getTask;

    function getTask(ref) {
        return $http({
            method: 'GET',
            url: '/api/getTask'
        });
    }

}

angular
    .module('BPMPortal')
    .service('taskService', taskService);