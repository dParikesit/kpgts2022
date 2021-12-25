const db = require('../database/db')
const router = require('express').Router()
const User = require("../controller/user");
const bcrypt = require("bcrypt");

// Signup, akses dengan endpoint /api/user/signup
router.post("/signup", (req,res) => {
    try {
        req.checkBody('email','Email is invalid. Please input a valid email address.').isEmail();
        req.checkBody('password','Password is invalid (empty or length less than 8 characters).').notEmpty().isLength({min:8});

        User.getOneEmail(req.body.email)
            .then(user => {
                console.log(user)
                if (!user) {
                    bcrypt.hash(req.body.password, 10)
                        .then((hash) => {
                            const user = {
                                name: req.body.name,
                                email : req.body.email,
                                password : hash,
                                role : req.body.role
                            }
                            User.create(user)
                                .then(id => {
                                    res.status(200).json({
                                        id, //DEBUGGING
                                        message : 'HMMM smoga bisa'
                                    });
                                });
                        });
                } else {
                    throw "Error";
                }
            });
    } catch (e) {
        res.status(500).json({error: e})
    }
});

// Logout, akses dengan endpoint /api/user/logout
router.get('/logout',(req,res) => {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router