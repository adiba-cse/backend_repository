const express = require('express')
const router = express.Router()
const Model = require('../models/papermodels')
router.get('/home', (req, res) => {
    console.log('Request at user home');
    res.send('request processed at home');


})
router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
        .then(() => {
            console.log('user data saved');
            res.json({ message: 'success' })
        })
        .catch((err) => {
            console.error(err);
            res.json(err)
        })



})
router.get('/getbyuser/:userid', (req, res) => {
    // console.log(req.body);
    Model.find({ user: req.params.userid }).populate('answers')
        .then((data) => {
            console.log('user data saved');
            res.json(data)
        })
        .catch((err) => {
            console.error(err);
            res.json(err)
        })
})


router.get('/getbyid/:id', (req, res) => {
    // console.log(req.body);
    Model.findById(req.params.id)
        .then((data) => {
            console.log('paper data saved');
            res.json(data)
        })
        .catch((err) => {
            console.error(err);
            res.json(err)
        })
})

router.put('/pushupdate/:id', (req, res) => {

    Model.findByIdAndUpdate(req.params.id, { $push: req.body })
        .then((data) => {
            console.log('paper data saved');
            res.json(data)
        })
        .catch((err) => {
            console.error(err);
            res.json(err)
        })
})

router.delete('/delete/:id', (req, res) => {
    // console.log(req.body);
    Model.findByIdAndDelete(req.params.id)
        .then((data) => {
            console.log('paper data deleted');
            res.json(data)
        })
        .catch((err) => {
            console.error(err);
            res.json(err)
        })
})
module.exports = router