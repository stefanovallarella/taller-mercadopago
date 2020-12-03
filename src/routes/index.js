const express = require('express');
const router = express.Router();

const indexController = require("../controllers/indexController");

/* GET home page. */
router.get('/', indexController.home);

/* GET detail page */
router.get('/detail', indexController.detail);


router.get('/callback', indexController.callback);


router.get('/notifications', indexController.notifications);



/* Post a /comprar */

router.post('/comprar', indexController.comprar);




module.exports = router;
