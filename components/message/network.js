const express = require('express');
const response = require('../../network/response');
const router = express.Router();

const controller = require('./controller');

router.get('/', function(req, res) {
  controller.getMessages()
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch(e => {
      response.error(req,res, 'Unexpected Server Error', 500, e);
    });
})

router.post('/', function(req, res){
  console.log(req);
  controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch(e => {
      response.error(req, res, 'Informacion invalida', 400);
    });
})

module.exports = router;


// router.get('/message', function(req, res) {
//   if (req.query.error == 'ok') {
//     response.error(req, res, 'Error al crear', 500);
//   }
//   response.success(req, res, 'Creado correctamente', 400)
// });

// router.get('/', function(req, res){
//   console.log(req.headers)
//   console.log(req.body);
//   console.log(req.query);
//   console.log('Prueba');
//   res.header({
//     "custom-header": "Nuestro valor personalizado"
//   });
//   res.status(200).send({error: '', body: 'Creado correctamente'});
// });