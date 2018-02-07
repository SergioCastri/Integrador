var schemas = require('./schemas.js');
var mongoose = require('mongoose');  //mongoose es algo que nos permite facilidad a la hora de manejar esquemas y hacer consultar
var Schema = mongoose.Schema;    //se defina una variable Schema

/*
var url = "mongodb://sergiocv55:12sergio34@ds119078.mlab.com:19078/proyectointegrador";

var moon = mongoose.connect(url, {
  useMongoClient: true
});

function close() {
  moon.close();
} */

var implements_schema = new Schema(schemas.getImplementsSchema());  //Creacion del esquema como tal
var inventory_schema = new Schema(schemas.getInventorySchema());

var Implements = mongoose.model("Implements", implements_schema);  //creacion del modelo, este es que conecta con la bd, se le pasa el esquema de la tabla a//Creacion del esquema como tal
var Inventory = mongoose.model("Inventory", inventory_schema);                                          // la que va a mapear



function getImplements(){
  return Implements;
}

function getInventory(){
  return Inventory;
}


module.exports = { // Exporta todos los modelos
  getImplements : getImplements,
  getInventory : getInventory
  //close: close
};
