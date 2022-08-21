const { Router } = require('express');
const { 
    currentBalance,
    addOperations,
    tenRegisteredOperations,
    allOperations,
    updateOperation,
    deleteOperation,
    operationsByCategory
} = require('./controllers');

const router = Router();

router.get('/currentBalance', currentBalance)
router.get('/tenRegisteredOperations', tenRegisteredOperations)
router.get('/allOperations', allOperations)
router.get('/operationsByCategory', operationsByCategory)
router.post('/addOperations', addOperations)
router.put('/updateOperation', updateOperation)
router.delete('/deleteOperation', deleteOperation)


module.exports = router;
