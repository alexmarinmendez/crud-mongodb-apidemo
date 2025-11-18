const mongoose = require('mongoose')

const employeeSchema = {
    name: String,
    email: String,
    role: String,
    department: String,
    salary: Number,
    createAt: {
        type: Date,
        default: Date.now
    }
}

const Employee = new mongoose.model('Employee', employeeSchema)

module.exports = Employee