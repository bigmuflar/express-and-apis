var express = require("express"),
    app     = express(),
    logger  = require('morgan')('dev'),
    path    = require("path");
//    bodyParser = require('body-parser');

app.use(logger);

//app.use(bodyParser.urlencoded({ extended: true }));
//
//app.use(bodyParser.json());

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/html/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.post('/formsubmit',function(req,res,next){
    console.log("/next: location: " + req.query);
    res.redirect("success");
    next();
});

app.get('/success', function(req,res){
    res.send('You successfully entered your information! ')
})


//app.listen(3000);
const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
    if(error) {
        console.log("Server error: ", error);
    } else {
        console.log("Server started on port: ", PORT);
    }
});

console.log("Running at Port 3000");