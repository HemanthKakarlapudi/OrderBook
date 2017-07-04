
// Dependencies
var express = require('express');
var bodyParser = require('body-parser');

// Express server
var app = express();

// parse JSON data from client
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname + '/OrderBook'));

app.use('/bower_components', express.static(__dirname + '/app/bower_components'));
app.use('/js', express.static(__dirname + '/app/js'));
app.use('/assets', express.static(__dirname + '/app/assets'));

app.use('/views', express.static(__dirname + '/app/views'));
// Routes
//app.use('/api', require('../config/routes/route.js'));

app.get('/', function(req, res) {
     res.sendFile(__dirname + '/app/index.html');
});


var sampleJson = '[{"instrument":"A","bids":[{"price":2402.28,"quantity":60},{"price":2501.21,"quantity":80},{"price":2501.16,"quantity":80},{"price":2500.39,"quantity":80},{"price":2500.1,"quantity":80}],"asks":[{"price":2305.19,"quantity":80},{"price":2505.96,"quantity":80},{"price":2506.9,"quantity":80},{"price":2507.68,"quantity":80},{"price":2507.81,"quantity":80}]},{"instrument":"B","bids":[{"price":2482.26,"quantity":160},{"price":2481.13,"quantity":160},{"price":2480.03,"quantity":160},{"price":2478.97,"quantity":160},{"price":2478.5,"quantity":200}],"asks":[{"price":2487.13,"quantity":160},{"price":2488.38,"quantity":160},{"price":2489.69,"quantity":160},{"price":2491.06,"quantity":160},{"price":2492.51,"quantity":160}]},{"instrument":"C","bids":[{"price":2517.3,"quantity":565},{"price":2516.7,"quantity":2060},{"price":2515.9,"quantity":2299},{"price":2515.2,"quantity":416},{"price":2515.1,"quantity":4010}],"asks":[{"price":2518.7,"quantity":20652},{"price":2517.8,"quantity":25000},{"price":2517.7,"quantity":25000},{"price":2517.5,"quantity":390},{"price":2517.4,"quantity":1106}]}]';

var sampleJsonNew = '[{"instrument":"A","bids":[{"price":8402.28,"quantity":80},{"price":9501.21,"quantity":90},{"price":6501.16,"quantity":60},{"price":2500.39,"quantity":20},{"price":2500.1,"quantity":20}],"asks":[{"price":2305.19,"quantity":80},{"price":2505.96,"quantity":80},{"price":2506.9,"quantity":80},{"price":2507.68,"quantity":80},{"price":2507.81,"quantity":80}]},{"instrument":"B","bids":[{"price":2482.26,"quantity":160},{"price":2481.13,"quantity":160},{"price":2480.03,"quantity":160},{"price":2478.97,"quantity":160},{"price":2478.5,"quantity":200}],"asks":[{"price":2487.13,"quantity":160},{"price":2488.38,"quantity":160},{"price":2489.69,"quantity":160},{"price":2491.06,"quantity":160},{"price":2492.51,"quantity":160}]},{"instrument":"C","bids":[{"price":2517.3,"quantity":565},{"price":2516.7,"quantity":2060},{"price":2515.9,"quantity":2299},{"price":2515.2,"quantity":416},{"price":2515.1,"quantity":4010}],"asks":[{"price":2518.7,"quantity":20652},{"price":2517.8,"quantity":25000},{"price":2517.7,"quantity":25000},{"price":2517.5,"quantity":390},{"price":2517.4,"quantity":1106}]}]';
app.get('/getContractDetails',function(req,res){
	console.log(req.query);
	var id = req.query.user_id;
	if(id === '0' || id === '2'){
		console.log('even');
		res.send(sampleJson);
	}else{
		console.log('odd');
		res.send(sampleJsonNew);}
	
});


// Start server
app.listen(7000);
console.log('API Started listening on 7000 with auto save');
