const express = require('express')
const router = express.Router()
const Model = require('../models/answer_model')
router.get('/home', (req, res) => {
    console.log('Request at user home');
    res.send('request processed at home');


})
router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
        .then((data) => {
            console.log('user data saved');
            res.json(data)
        })
        .catch((err) => {
            console.error(err);
            res.json(err)
        })



})



router.get('/getbypaper/:paperid', (req, res) => {
    // console.log(req.body);
    Model.find({ paper: req.params.paperid })
        .then(() => {
            console.log('user data saved');
            res.json({ message: 'success' })
        })
        .catch((err) => {
            console.error(err);
            res.json(err)
        })



})


module.exports = router