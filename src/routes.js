const { Router } = require('express');

const ContactController = require('./app/controllers/ContactController');

const router = Router();

router.delete('/contacts/:id', ContactController.delete);

router.get(
  '/contacts',
  (request, response, next) => { // Middleware
    request.appId = 'MEU APP ID';
    next();
  },
  ContactController.index,
);

router.get('/contacts/:id', ContactController.show);

module.exports = router;
