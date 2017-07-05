/***********************************************
* LoginService.js - service 
**********************************************/

function loginService($http) {
    this.getAuth = getAuth

    function getAuth(ref) {
        return $http({
            method: 'POST',
            url: '/api/login',
            data: ref,
            headers: { 'Content-Type': 'application/json'}
        })
    }
}

angular
    .module('BPMPortal')
    .service('loginService', loginService)