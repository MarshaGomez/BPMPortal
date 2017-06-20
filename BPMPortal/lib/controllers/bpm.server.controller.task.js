/***********************************************
* Bpm.server.controller.task.js - controller
**********************************************/

'use strict';

var 
    sqlCommand = null,
    bpm = require('./bpm.server.controller');

/***********************************************
* Public method 
**********************************************/
exports.getTask = getTask;

/***********************************************
* Public function 
***********************************************/

//List all the Controversys depend on message type
function getTask(req, res) {
    var messageType = req.query.ref;
    sqlCommand = "SELECT * FROM DUAL";
    bpm.requestQuery(sqlCommand, []).then(
        function (result) {
            res.send(result);
        })
        .catch(
        function (reason) {
            res.status(500).send(reason);
        });
}
