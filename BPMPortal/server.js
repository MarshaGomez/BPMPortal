/**
 * Express Seed: Module dependencies
 */

var
  express = require('express'),
  routes = require('./routes'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  favicon = require('serve-favicon'),
  http = require('http'),
  fs = require('fs'),
  log4js = require('log4js'),
  path = require('path'),
  helmet = require('helmet');

var app = module.exports = express();

/**
 * Configuration
 */

// Lee variable de ambiente para decidir parametros de uso
var p_paramsfilename = 'params.json';
var obj = JSON.parse(fs.readFileSync(p_paramsfilename, 'utf8'));
// Carga de parametros
// Log4js
var log4jsconfig = obj.log4js; // Carga configuracion del archivo params
log4js.configure(log4jsconfig);
var logger = log4js.getLogger(log4jsconfig.appenders[0].category); // Un logger por defecto.
// Log in Express
app.use(log4js.connectLogger(logger, {
  level: obj.log4js.level,
  format: ':method :url :status :remote-addr :response-time ms'
}));
logger.setLevel(obj.log4js.level);
// Creating global variables
global.language = obj.BPMPortal.language;

// Use Helmet
app.use(helmet());
// all environments
app.set('port', process.env.PORT || (parseInt(process.argv.slice(2)) || 8000));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/params', function(req, res) {
    res.send({
        language: global.language
    });
});

// development only
if (app.get('env') === 'development') {
  // TODO
}
// testing only
if (app.get('env') === 'testing') {
  // TODO
}
// production only
if (app.get('env') === 'production') {
  // TODO
}

app.get('/', routes.index);
// redirect all others to the index (HTML5 history)
app.get('*', routes.index);



/**
 * Start Server
 */
var http = require('http').Server(app);

http.listen(app.get('port'), function() {
  logger.info('App Server listening on port ' + app.get('port'));
});

