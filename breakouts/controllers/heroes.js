var Hero = require('../models/heroesModel');
//accesses the Model for db.heroes

function create (req, res){
  var newDoc = new Hero(req.body);
  newDoc.save((err, doc) =>{
    if(err){
      return res.send(err);
    }
    res.send(doc);
  })
}
