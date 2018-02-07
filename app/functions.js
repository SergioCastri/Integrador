var models = require('./models.js');
var schemas = require('./schemas.js');

Implement = models.getImplements();

function saveImplements(req, res) { //función para guardar implemento
  var implement = new Implement({
    type_implement: "bicicleta", quantity: "3"});

  implement.save(function() {
    res.send(implement);
  });
};

function getAllImplements(req, res){ 

  Implement.find({}, '-_id -__v', function(err, doc) {
      res.status(200).jsonp(doc);
  });

};


module.exports = { // Exporta todos los metodos
  saveImplements: saveImplements,
  getAllImplements : getAllImplements	
};
