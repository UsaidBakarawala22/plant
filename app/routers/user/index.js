const router = require('express').Router();
const controllers = require('./lib/controllers');

// router.post('/connect', controllers.connect);
router.get('/list', controllers.listQuery);
router.post('/list1', controllers.listQuery1);
router.post('/list2', controllers.listQuery2);
router.post('/list3', controllers.listQuery3);
router.post('/list4', controllers.listQuery4);
router.post('/list5', controllers.listQuery5);
router.post('/list6', controllers.listQuery6);
// router.post('/treeLooks', controllers.treeLooks);
// router.post('/addType', controllers.addType);
// router.post('/addLook', controllers.addLook);
// router.post('/addHeight', controllers.addHeight);
// router.post('/addTree', controllers.addTree);
// router.post('/fruit', controllers.fruit);
// router.post('/shape', controllers.addShape);
// router.post('/color', controllers.addColor);

module.exports = router;
