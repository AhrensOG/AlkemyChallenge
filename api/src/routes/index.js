const { Router } = require('express');
const { currentBalance, addOperations, tenRegisteredOperations } = require('./controllers');

const router = Router();

router.get('/currentBalance', currentBalance)
router.get('/tenRegisteredOperations', tenRegisteredOperations)
router.post('/addOperations', addOperations)


module.exports = router;
