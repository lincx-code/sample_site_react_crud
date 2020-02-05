let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

//User model
let userSchema = require('../models/User');

//Create user
router.route('/create-user').post((req, res, next) => {
    userSchema.create(req.body, (error, data) => {
        if(error) {
            return next(error)
        }else{
            console.log(data)
            res.json(data)
        }
    })
});

//Read users
router.route('/').get((req, res) => {
    userSchema.find((error, data) => {
        if(error) {
            return next(error)
        }else{
            res.json(data)
        }
    })
});

//Get single user
router.route('/edit-user/:id').get((req, res) => {
    userSchema.findById(req.params.id, (error, data) => {
        if(error) {
            return next(error)
        }else{
            res.json(data)
        }
    }) 
});

//Update user
router.route('/update-user/:id').put((req, res, next) => {
    userSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if(error){
            console.log(error);
            return next(error);
        }else{
            res.json(data)
            console.log('User updated successfully!')
        }
    })
})

//Delete user
router.route('/delete-user/:id').delete((req, res, next) => {
    userSchema.findByIdAndDelete(req.params.id, (error, data) => {
        if(error){
            return next(error)
        }else{
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = router;