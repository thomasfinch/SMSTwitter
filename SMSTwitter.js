var credentials = require('./credentials.js');
var twitter = require('node-twitter-api');
var twilio = require('twilio'); //(credentials.twilioSID, credentials.twilioAuthToken);
var http = require('http');

http.createServer(function (req, res) 
{    //Create TwiML response
    var twiml = new twilio.TwimlResponse();
    twiml.message('Hello World!');

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());

}).listen(1337, '127.0.0.1');

