const { Router } = require('express');
const { currentBalance, addOperations } = require('./controllers');

const router = Router();

router.get('/currentBalance', currentBalance)
router.post('/addOperations', addOperations)


module.exports = router;
