const db = require('../database/db')
const router = require('express').Router()
const User = require("../controller/user");
const bcrypt = require("bcrypt");

// Signup, akses dengan endpoint /api/user/signup
router.post("/signup", (req,res) => {
    try {
        req.checkBody('email','Email is invalid. Please input a valid email address.').isEmail();
        req.checkBody('password','Password is invalid (empty or length less than 8 characters).').notEmpty().isLength({min:8});

        db.query(
            "SELECT * FROM user where email = ?;",
            req.body.email,
            (err, result) => {
                if (err) {
                    console.log(err);
                }

                if (result.length > 0) {
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                        if (err) {
                            console.log(err);
                        }

                        db.query(
                            "INSERT INTO user (name, email, password, role) VALUES (?,?,?,?)",
                            [req.body.name, req.body.email, hash, req.body.role],
                            (err, result) => {
                                if (err) {
                                    console.log(err);
                                }
                                
                                if (result) {
                                    res.status(200).json({message : 'HMMM smoga bisa'});
                                }
                            }
                        );    
                    });
                } else {
                    res.json({ message: "Email already exist. Please choose another email." });
                }
            }       
        )


        // User.getOneEmail(req.body.email)
        //     .then(user => {
        //         console.log(user)
        //         if (!user) {
        //             bcrypt.hash(req.body.password, 10)
        //                 .then((hash) => {
        //                     const user = {
        //                         name: req.body.name,
        //                         email : req.body.email,
        //                         password : hash,
        //                         role : req.body.role
        //                     }
        //                     User.create(user)
        //                         .then(id => {
        //                             res.status(200).json({
        //                                 id, //DEBUGGING
        //                                 message : 'HMMM smoga bisa'
        //                             });
        //                         });
        //                 });
        //         } else {
        //             throw "Error";
        //         }
        //     });
    } catch (e) {
        res.status(500).json({error: e})
    };
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
        db.query(
            "SELECT * FROM user WHERE email = ?;",
            email,
            (err, result) => {
                if (err) {
                    console.log(err);
                }
        
                if (result.length > 0) {
                    bcrypt.compare(req.body.password, result[0].password, (error, response) => {
                    if (response) {
                        req.session.user = result; //Creating a session
                        console.log(req.session.user);
                        res.status(200).json({result, message : 'HMMM smoga bisa'});
                    } else {
                        res.json({ message: "Wrong email/password combination!" });
                    }
                });
                } else {
                    res.json({ message: "User doesn't exist" });
                }
            }
        );
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