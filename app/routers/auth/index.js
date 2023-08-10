const router = require('express').Router();
const controllers = require('./lib/controllers');

router.post('/isEmailReceived', controllers.isEmailReceived);

module.exports = router;
