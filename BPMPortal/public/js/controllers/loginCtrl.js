/***********************************************
* LoginCtrl.js - controller 
**********************************************/

'use strict'

function loginCtrl($scope, loginService, notify, $window, $translate) {
    start()

    /***********************************************
    * public functions
    **********************************************/

    function start() {
        $scope.userName = null
        $scope.password = null
        $scope.generalNotify = generalNotify
        $scope.getAuth       = getAuth
    }

    /***********************************************
     * private functions
     **********************************************/

    notify.config({
       duration: '5000'
    })

    //Classes: alert-info, alert-success, alert-warning, alert-danger
    function generalNotify(msg, classes) {
        notify({
            message: msg,
            classes: classes,
            templateUrl: 'views/common/notify.html'
        })
    }

    function getAuth(userName, password) {
        var data = {
            "userName" : userName,
            "password" : password
        }

        loginService.getAuth(data).then(function(result) {
            
            if (!result.data){
                $window.location.href = '/#/index/chargeback'
            } else {
                generalNotify($translate.instant("LOGIN_M1"), 'alert-danger')
            }
        })
    }
}

angular
    .module('BPMPortal')
    .controller('loginCtrl', loginCtrl)