const express = require('express')
const Employee = require('../models/Employee')
const router = express.Router()

router.get('/', async(req, res) => {
    try {
        const employees = await Employee.find()
        res.status(200).json(employees)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', async(req, res) => {
    try {
        const employee = await Employee.findById(req.params.id)
        if (!employee) {
            return res.status(404).json({ message: "Employee not found" })
        }
        res.status(200).json(employee)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async(req, res) => {
    try {
        const employee = new Employee(req.body)
        employee.save()
        res.status(201).json({ message: 'Employee created successfully', employee: employee })
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
})



module.exports = router