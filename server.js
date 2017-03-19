var express = require('express');
var useragent = require('express-useragent');
var bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.json());
app.use(useragent.express());

app.get('/api/whoami',function (req,res) {
	 //var ipInfo = getIP(req);
	 var ipInfo = req.ip;
	 var lang = req.acceptsLanguages();
	 var os = 'OS ' + req.useragent.os + ' Browser ' + req.useragent.browser;
	 //res.json({"soft":os});
	 //console.log(os);
	res.json({"IP":ipInfo,"Language":lang[0],"OS":os});
})

app.listen(process.env.PORT || 1337,function(){
	console.log('On 1337');
})