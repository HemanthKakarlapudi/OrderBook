
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

var sampleJson = {
    "instrument": "A",
    "bids": [
      {
        "price": 2502.28,
        "quantity": 80
      },
      {
        "price": 2501.21,
        "quantity": 80
      },
      {
        "price": 2501.16,
        "quantity": 80
      },
      {
        "price": 2500.39,
        "quantity": 80
      },
      {
        "price": 2500.1,
        "quantity": 80
      }
    ],
    "asks": [
      {
        "price": 2505.19,
        "quantity": 80
      },
      {
        "price": 2505.96,
        "quantity": 80
      },
      {
        "price": 2506.9,
        "quantity": 80
      },
      {
        "price": 2507.68,
        "quantity": 80
      },
      {
        "price": 2507.81,
        "quantity": 80
      }
    ]
};

app.get('/getContractDetails',function(req,res){
	console.log('hello');
	res.send(sampleJson);
});


// Start server
app.listen(7000);
console.log('API Started listening on 7000 with auto save');
