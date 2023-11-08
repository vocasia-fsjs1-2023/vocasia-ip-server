const reviewController = require('../../controllers/reviewController')
const authentication = require('../../middlewares/authentication');
const authorization = require('../../middlewares/authorization');
const errorHandling = require('../../middlewares/errorHandling');

const router = require('express').Router();

router.post('/' , authentication , reviewController.postReview );
router.get('/', reviewController.getReview);
router.delete('/:id', authentication, authorization, reviewController.delReview);
router.put('/:id', authentication, authorization, reviewController.putReview);

router.use(errorHandling);

module.exports = router;