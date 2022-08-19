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

const addOperations = async (req, res) => {
    try {
        let { concept, amount, date, type } = req.body;
        if (concept && amount && date && type) {
            type === 'egress' ? amount = -amount : amount
            const operation = await Operation.create({
                concept,
                amount,
                date,
                type
            })
            return res.status(200).json({'Operation successfully created': operation})
        } 
        return res.status(400).json('Missing Data')
    } catch (e) {
        res.status(400).send({ data: e.message })
    }
}

module.exports = {
    currentBalance,
    addOperations,
}