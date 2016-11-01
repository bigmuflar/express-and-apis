var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;


//this serves up all files in the public directory
//app.use(express.static('public'));

//route setup for backend.
app.get('/', (req, res) =>{
	//res.send("<h1>Hello World </h1>");
    res.sendFile(__dirname +'/index.html');
    console.log('here I am');
})

app.get('/app.html', (req, res) =>{
	//res.send("<h1>Hello World </h1>");
    res.sendFile(__dirname +'/app.html');
    console.log('here I am');
})

//app.listen (PORT, function(err) [])
app.listen(PORT, (err) => {
	if(err){
		console.log("Server Error", err);
		process.exit(1);
	};
	console.log("Server is up listening to port " + PORT);
})
