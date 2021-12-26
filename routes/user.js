const express = require('express');
const db = require('../database/db')['db'];
const router = require('express').Router()
const User = require("../controller/user");
const {body, validationResult} = require('express-validator');
var session = require('express-session');
const bcrypt = require("bcrypt");

// Signup, akses dengan endpoint /api/user/signup
router.post("/signup", (req,res) => {
    body('email','Email is invalid. Please input a valid email address.').exists().isEmail();
    body('password','Password is invalid (empty or length less than 8 characters).').notEmpty().isLength({min:8});
    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
    }

    // db.query(
    //     "SELECT * FROM user where email = ?;",
    //     req.body.email,
    //     (err, result) => {
    //         if (err) {
    //             console.log(err);
    //         }

    //         if (result.length > 0) {
    //             bcrypt.hash(req.body.password, 10, (err, hash) => {
    //                 if (err) {
    //                     console.log(err);
    //                 }

    //                 db.query(
    //                     "INSERT INTO user (name, email, password, role) VALUES (?,?,?,?)",
    //                     [req.body.name, req.body.email, hash, req.body.role],
    //                     (err, result) => {
    //                         if (err) {
    //                             console.log(err);
    //                         }
                            
    //                         if (result) {
    //                             res.status(200).json({message : 'HMMM smoga bisa'});
    //                         }
    //                     }
    //                 );    
    //             });
    //         } else {
    //             res.json({ message: "Email already exist. Please choose another email." });
    //         }
    //     }       
    // )


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
                                    message : 'Registration succesful.'
                                });
                            });
                    });
            } else {
                res.json({ message: "Email already exist. Please choose another email." });
            }
        });
});

router.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
});

router.post("/login", (req, res) => {
    try {
        User.getOneEmail(req.body.email)
        .then(user => {
            console.log(user)
            if (user) {
                bcrypt.compare(req.body.password, user.password, (error, response) => {
                    if (response) {
                        req.session.sid = user.id;
                        req.session.role = user.role;
                        console.log(req.session);
                        res.status(200).json({message : 'Logged in.'});
                    } else {
                        res.json({ message: "Wrong email/password combination!" });
                    }
                });
            } else {
                res.json({ message: "User doesn't exist. Please try to login again." });
            }
        });

        // db.query(
        //     "SELECT * FROM user WHERE email = ?;",
        //     email,
        //     (err, result) => {
        //         if (err) {
        //             console.log(err);
        //         }
        
        //         if (result.length > 0) {
        //             bcrypt.compare(req.body.password, result[0].password, (error, response) => {
        //             if (response) {
        //                 req.session.user = result; //Creating a session
        //                 console.log(req.session.user);
        //                 res.status(200).json({result, message : 'HMMM smoga bisa'});
        //             } else {
        //                 res.json({ message: "Wrong email/password combination!" });
        //             }
        //         });
        //         } else {
        //             res.json({ message: "User doesn't exist. Please try to login again." });
        //         }
        //     }
        // );
    } catch (e) {
        res.status(500).json({error: e})
    }    
});

// Logout, akses dengan endpoint /api/user/logout
router.post('/logout',(req,res) => {
    req.session.destroy();
    req.logOut();
    res.redirect('/');
});

module.exports = router