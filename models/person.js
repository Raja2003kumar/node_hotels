const mongoose = require("mongoose");

// Create Mongoose schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String
    },
    salary: {
        type: Number,
        required: true
    },
    work:{
        type: String,
        enum:['chef','waiter','client'],
        required:true,

    }
});

// Create Person model
const Person = mongoose.model('person', personSchema);

module.exports = Person;
