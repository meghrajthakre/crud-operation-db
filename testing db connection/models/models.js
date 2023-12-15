const mongoose = require('mongoose');


const myData = new mongoose.Schema({
    fristname: {
        type: String,
    },
    middlename: {
        type: String,
    },
    surname: {
        type: String,
    },
    adress: {
        type: String,
    }
})

const mybiodata = new mongoose.model("biodata", myData);

module.exports = mybiodata