
const express = require('express');
const app = express();


/*
* this path is to be added to the monetbil service so that successive responses reach here
*/
app.get('/success', function(req, res){
	const status = "Success";
	const $req = req.query
	
	/*
	* Do your logic here
	*/
	
	res.send({status, $req});
});

/*
* this path is to be added to the monetbil service so that successive responses reach here
*/
app.get('/failure', function(req, res){
	const status = "Failed";
	const $req = req.query
	
	/*
	* Do your logic here
	*/
	
	res.send({status, $req});
});

/*
* this path is to be added to the monetbil service so that canceled responses reach here
*/
app.get('/cancel', function(req, res){
	const status = "Cancel";
	const $req = req.query
	
	/*
	* Do your logic here
	*/
	
	res.send({status, $req});
});


/*
* this path is to be added to the monetbil service so that canceled responses reach here
*/
app.get('/notification', function(req, res){
	const status = "Notification";
	const $req = req.query
	
	/*
	* Do your logic here
	*/
	
	res.send({status, $req});
});


const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log("Listening to port: " + port))