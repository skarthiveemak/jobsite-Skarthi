const mysql = require('mysql');
const express = require('express');
var app = express();
var bodyParser = require('body-parser')
var session = require('express-session');
const cors = require('cors');
const { json } = require('body-parser');

var corsOptions = {
    origin: true,
    optionsSuccessStatus: 200 // For legacy browser support
}
app.use(function (req, res, next) {
    
    bodyParser.json({ type: 'application/*+json' });
    bodyParser.text({ type: 'text/html' });
    bodyParser.raw({ type: 'application/vnd.custom-type' });

    (cors(corsOptions));

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

module.exports = app;


var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : '12345',
    database : 'jobsite',
    multiplestatements : true
});

mysqlConnection.connect((err)=> {
    if(!err)
    console.log('Db is Sucess');
    else
    console.log('db is failed \n Error :' + JSON.stringify(err, undefined, 2));
});

app.listen(3700,()=>console.log('Express server is running  at port 3700'));

app.get('/', function (req, res) {

    
    res.send('hello world')
})



app.get('/login',(request, response) =>{
	var Email = request.body.Email;
	var Password = request.body.Password;
	if (Email && Password) {
		connection.query('SELECT * FROM register WHERE Email = ? AND Password = ?', [Email, Password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.Email= Email;
				response.redirect(json);
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});
app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.Email + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});
