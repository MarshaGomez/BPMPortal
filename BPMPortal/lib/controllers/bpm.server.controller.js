/***********************************************
* Bpm.server.controller.js - controller
**********************************************/

'use strict';

var request = require('request'),
    q = require('q');


/***********************************************
* Public method 
**********************************************/
exports.requestQuery = requestQuery;
exports.requestProcedure = requestProcedure;
exports.validateNumber = validateNumber;

/***********************************************
* DBGateways functions 
***********************************************/

//Request private function - CRUD DBGateways
function requestQuery(query, args) {
    var deferred = q.defer();
    var options = {
        url: global.dbgateway.url,
        json: true,
        method: 'POST',
        body: {
            args: args,
            command: query,
            serviceName: "GLOBALPOS",
            type: "query"
        }
    };
    try {
        request.post(options, function (error, response, body) {
            if (error) {
                deferred.reject(error);
                return deferred.reject(error);
            } else {
                if (response && response.statusCode === 200) {
                    if (body.context.code !== "000000") {
                        console.log(body);
                        deferred.reject(body.context.message);
                    } else {
                        var selectResult = body.data.rows;
                        deferred.resolve(selectResult);
                    }
                } else {
                    if (body) {
                        deferred.reject(body);
                    } else {
                        deferred.reject("error");
                    }
                }
            }
        });
    } catch (err) {
        global.logger.error(err);
        deferred.reject(err);
    }
    return deferred.promise;
};


//Request private function - CRUD DBGateways
function requestProcedure(procedureName, args) {
    var deferred = q.defer();
    var options = {
        url: global.dbgateway.urlSP,
        json: true,
        method: 'POST',
        body: {
            args: args,
            command: procedureName,
            options: "paramstoobject",
            serviceName: "GLOBALPOS",
            type: "storedprocedure"
        }
    };
    try {
        request.post(options, function (error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (response && response.statusCode === 200) {
                    if (body.context.code !== "000000") {
                        console.log(body);
                        deferred.reject(body.context.message);
                    } else {
                        var selectResult = body.data;
                        deferred.resolve(selectResult);
                    }
                } else {
                    if (body) {
                        deferred.reject(body);
                    } else {
                        deferred.reject("error");
                    }
                }
            }
        });
    } catch (err) {
        global.logger.error(err);
        deferred.reject(err);
    }
    return deferred.promise;
};


//Only Numbers Validation 
function validateNumber(req, res) {
    if (!req.query.ref.match(/^\d+/)) {
        req.query.ref = 1;
    };
};