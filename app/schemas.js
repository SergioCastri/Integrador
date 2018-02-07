var inventorySchemaJSON = {
  inventory: [{}]
}
function getInventorySchema(){
  return inventorySchemaJSON;
}

var implementsSchemaJSON = { //estructura del esquema, en formato json, excelente para nodo porque json surge de js y node esta basado en js
  type_implement: String,
  quantity: Number
}

function getImplementsSchema(){
  return implementsSchemaJSON;
}

module.exports = { // Exporta todos los metodos
  getImplementsSchema : getImplementsSchema,
  getInventorySchema : getInventorySchema
};

