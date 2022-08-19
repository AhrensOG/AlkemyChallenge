const { Router } = require('express');
const { 
    currentBalance,
    addOperations,
    tenRegisteredOperations,
    allOperations
} = require('./controllers');

const router = Router();

router.get('/currentBalance', currentBalance)
router.get('/tenRegisteredOperations', tenRegisteredOperations)
router.get('/allOperations', allOperations)
router.post('/addOperations', addOperations)


module.exports = router;
