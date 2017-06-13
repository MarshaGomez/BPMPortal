/**
 * ParamsService - service
 *
 */
function ParamsService($http, $q) {
    delete $http.defaults.headers.common['X-Requested-With'];

    // Params
    this.paramsquery = function() {
        var urltosend = '/params';
        return $http({
            method: 'GET',
            url : urltosend
        }).then(function(response) {
            if (typeof response.data == 'object') {
                // Parece que estamos bien, tengo un objeto JSON
                return response.data;
            }
            else {
                // Respuesta Invalida
                return $q.reject(response.data);
            }
        }, function(response) {
            // Algo grave ha ocurrido, probablemente una caida en la red, no me contestan...
            return $q.reject(response.data);
        });
    };

}


/**
 * Pass all functions into module
 */
angular
    .module('BPMPortal')
    .service('ParamsService', ParamsService);