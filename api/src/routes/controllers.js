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

const tenRegisteredOperations = async (req, res) => {
    try {
        const operations = await Operation.findAll()
        operations.length > 10 ? operations.reverse().length = 10 : operations.reverse()
        res.status(200).json(operations)
    } catch (e) {
        res.status(400).send({ data: e.message })
    }
}

const allOperations = async (req, res) => {
    try {
        const { type } = req.query;
        let allOperations;
        type ? (allOperations = await Operation.findAll({
            where: {
                type
            }
        }))
        : res.status(400).send('Missing Data')
        res.status(200).json(allOperations)
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

const updateOperation = async (req, res) => {
    try {
        let { idOp, concept, amount, date } = req.body;
        if(!idOp) res.status(400).send('Missing Data')
        const id = Number(idOp)

        const operation = await Operation.findByPk(id)
        operation.type === 'egress' ? amount = -amount : amount

        concept && await Operation.update({ concept },{ where: { id } })
        amount && await Operation.update({ amount },{ where: { id } })      
        date && await Operation.update({ date },{ where: { id } })           

        const updated = await Operation.findByPk(id);

        res.status(200).json({'Operation updated successfully': updated})
    } catch (e) {
        res.status(400).send({ data: e.message })
    }
}

module.exports = {
    currentBalance,
    addOperations,
    tenRegisteredOperations,
    allOperations,
    updateOperation
}