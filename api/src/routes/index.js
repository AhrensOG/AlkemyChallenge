const { Router } = require('express');
const { 
    currentBalance,
    addOperations,
    tenRegisteredOperations,
    allOperations,
    updateOperation
} = require('./controllers');

const router = Router();

router.get('/currentBalance', currentBalance)
router.get('/tenRegisteredOperations', tenRegisteredOperations)
router.get('/allOperations', allOperations)
router.post('/addOperations', addOperations)
router.put('/updateOperation', updateOperation)


module.exports = router;
