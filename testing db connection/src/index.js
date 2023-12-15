const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('../db/connection');
const mybiodata = require('../models/models')
app.use(express.json());



app.post("/data", async (req, res) => {
    try {
        const data = new mybiodata(req.body);
        const rest = await data.save();
        res.status(200).send(rest);

        console.log('success creating data ');

    } catch (error) {
        console.log(error);
        status(404).send(error)
    }
});


app.get('/', async (req, res) => {
    try {

        const getData = await mybiodata.find();
        res.status(200).send(getData);
        console.log('geting data ', res.status);

    } catch (error) {
        console.log('get and error ', error);
    }
});

app.get('/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const getData = await mybiodata.findById(_id);
        res.status(200).send(getData);

    } catch (error) {
        console.log(error);
    }
})

app.patch('/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updatData = await mybiodata.findByIdAndUpdate(_id, req.body, { new: true });
        res.status(200).send(updatData);

    } catch (error) {
        console.log(error);

    }
})

app.delete('/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updatData = await mybiodata.findOneAndDelete(_id, req.body, { new: true });
        console.log("delete updatData");
        res.status(200).send(updatData)
    } catch (error) {
        console.log(error);
    }
})

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
})