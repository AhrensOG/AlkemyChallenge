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

const operationsByCategory = async (req, res) => {
    try {
        const category = req.query.category.toLowerCase();
        if(!category) return res.status(400).send('Missing Data')
        const operations = await Operation.findAll({ where: { category } })
        operations ? res.status(200).json(operations) : res.status(200).json('Operations not found')
    } catch (e) {
        return res.status(400).send({ data: e.message })
    }
}

const addOperations = async (req, res) => {
    try {
        let { concept, amount, date, type, category } = req.body;
        category = category.toLowerCase()
        if (concept && amount && date && type) {
            type === 'egress' ? amount = -amount : amount
            const operation = await Operation.create({
                concept,
                amount,
                date,
                type,
                category
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
        if(!idOp) return res.status(400).send('Missing Data')
        const id = Number(idOp)

        const operation = await Operation.findByPk(id)
        if(!operation) return res.status(400).send('Operation not found')
        operation.type === 'egress' ? amount = -amount : amount

        concept && await Operation.update({ concept },{ where: { id } })
        amount && await Operation.update({ amount },{ where: { id } })      
        date && await Operation.update({ date },{ where: { id } })           

        const updated = await Operation.findByPk(id);

        return res.status(200).json({'Operation updated successfully': updated})
    } catch (e) {
        res.status(400).send({ data: e.message })
    }
}

const deleteOperation = async (req, res) => {
    try {
        let { idOp } = req.query;
        if(!idOp) return res.status(400).send('Missing Data')
        const operation = await Operation.findByPk(idOp)
        if(operation) {
            await operation.destroy()
            return res.status(200).json("Operation deleted successfully")
        } else {
            return res.status(200).json("Operation already deleted")
        }
    } catch (e) {
        return res.status(400).send({ data: e.message })
    }
}

module.exports = {
    currentBalance,
    addOperations,
    tenRegisteredOperations,
    allOperations,
    updateOperation,
    deleteOperation,
    operationsByCategory
}