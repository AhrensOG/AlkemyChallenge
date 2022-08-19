const { Operation } = require('../models/Operations.js');

const currentBalance = async (req, res) => {
    try {
        const operations = await Operation.findAll({
            attributes: ['amount']
        });
        let current = 0;
        operations.forEach(e => {
            current += Number(e.amount)
        })
        res.status(200).json(current)
    } catch (e) {
        res.status(400).send({ data: e.message })
    }
}

module.exports = {
    currentBalance,
    addOperations,
}