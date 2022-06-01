const expres = require ('express');
const router = expres.Router();
const maincontroller = require('../controllers/mainControllers');


// Home
router.get ("/",maincontroller.index);


module.exports = router