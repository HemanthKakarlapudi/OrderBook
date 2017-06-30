
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
    "contractName": "NewYork",
    "configurations": [
        {
            "name": "Launch",
            "type": "node",
            "request": "launch",
            "program": "${workspaceRoot}\\server.js",
            "stopOnEntry": false,
            "args": [],
            "cwd": "${workspaceRoot}",
            "preLaunchTask": null,
            "runtimeExecutable": null,
            "runtimeArgs": [
                "--nolazy"
            ],
            "env": {
                "NODE_ENV": "development"
            },
            "console": "internalConsole",
            "sourceMaps": false,
            "outFiles": []
        },
       
        {
            "name": "Attach to Process",
            "type": "node",
            "request": "attach",
            "processId": "${command.PickProcess}",
            "port": 8000,
            "sourceMaps": false,
            "outFiles": []
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
