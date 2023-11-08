const tourismController = require('../../controllers/tourismController');
const authentication = require('../../middlewares/authentication');
const errorHandling = require('../../middlewares/errorHandling');
const isAdmin = require('../../middlewares/isAdmin');

const router = require('express').Router();

router.get('/' ,authentication, isAdmin, tourismController.getTourism);
router.get('/:id', tourismController.getTourismByID);
router.post('/', tourismController.postTourism);
router.delete('/:id',authentication, isAdmin, tourismController.delTourism);
router.put('/:id', authentication, isAdmin, tourismController.putTourism);

router.use(errorHandling);

module.exports = router;