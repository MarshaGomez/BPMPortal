/***********************************************
* Bpm.server.config.js - config
**********************************************/

"use strict";

module.exports = function(app) {
    // IM Routes
    require('../routes/api')(app);
    // Index
    // require('../routes/index')(app);
}