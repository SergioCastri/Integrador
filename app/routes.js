var express = require('express');
var router = express.Router();
var fs = require("fs");  //filesystem
var db = require('./functions');  //Se requiere el el modulo queries que esta dentro del proyecto


router.get('/', function(req, res) {
	fs.readFile("./views/index.html", function(err,html){   //cargar la pagina de manera asincrona, se pasa el callback con paramtero error y
															// dato, en este caso el html
    res.write(html); //Probar escribiendo el contenido de index  (paso 8)
    res.end();       //finalizar la petición
    });
});

router.get('/v1/saveImplement', db.saveImplements);
router.get('/v1/getAllImplements', db.getAllImplements);


module.exports = router;    //exporta todo lo que esta almacenado en router