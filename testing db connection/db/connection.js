const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/biodata")
    .then((connection) => {
        console.log('Connected to MongoDB ' + connection);
    })
    .catch((error) => {
        console.log(error);
    })