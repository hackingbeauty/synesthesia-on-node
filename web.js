var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request,response){
  response.send('Hello World!');
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("listening on " + port);
});

var redis = require('redis-url').connect(process.env.REDISTOGO_URL);

redist.set('foo','bar');

redis.get('foo', function(err,value){
  console.log('foo is: ' + value);
});
