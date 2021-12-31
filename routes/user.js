const router = require('express').Router()
const User = require("../controller/user");
const mailer = require("../mailer");
const {body, validationResult} = require('express-validator');
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
    User.getOneEmail(req.body.email)
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10)
                    .then((hash) => {
                        const user = {
                            name: req.body.nama,
                            email : req.body.email,
                            password : hash
                        }
                        User.create(user)
                            .then(id => {
                                res.status(200).json({
                                    message : 'Registration succesful.'
                                });
                            });
                    });
            } else {
                res.status(400).json({ message: "Email already exist. Please choose another email." });
            }
        });
});

router.get("/login", (req, res) => {
    if (req.session) {
        res.send({ loggedIn: true, user: req.session});
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
                        req.session.uid = user.id;
                        req.session.role = user.role;
                        console.log(req.session);
                        // req.session.save()
                        res.status(200).json({name : user.name});
                    } else {
                        res.json({ message: "Wrong email/password combination!" });
                    }
                });
            } else {
                res.json({ message: "User doesn't exist. Please try to login again." });
            }
        });
    } catch (e) {
        res.status(500).json({error: e})
    }    
});

// Logout, akses dengan endpoint /api/user/logout
router.post('/logout',(req,res) => {
    req.session.destroy(function() {
        res.clearCookie('connect.sid', { path: '/' }).status(200).json('Cookie deleted.');
    });
});

router.post('/resetpassword', (req, res) => {
    body('email','Email is invalid. Please input a valid email address.').exists().isEmail();
    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
    }

    User.getOneEmail(req.body.email)
        .then(user => {
            if (user) {
                mailer.send ({
                    template: 'reset_pass',
                    message: {
                        to: req.body.email
                    },
                    locals: {
                        link: `${process.env.ORIGIN_URL}/sso/reset/${token}?email=${req.body.email}` // token perlu diubah
                    }
                });
            } else {
                res.status(400).json({ message: "Email doesn't exist. Please fill in a valid email." });
            }
        });
});

router.put('/resetpassword', (req,res) => {
    body('newPass','Password is invalid (empty or length less than 8 characters).').notEmpty().isLength({min:8});
    body('confirmPass','Password confirmation is required.').notEmpty();
    body("email", "Team email is required!").exists().isEmail();

    let errors = validationResult(req);
    if (req.body.confirmPass !== req.body.newPass) {
        errors["confirmPass"] = "Password confirmation is not matched";
    }

    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
    }
    User.getOneEmail(req.body.email)
        .then(user => {
            if (user) {
                bcrypt.hash(req.body.newPass, 10)
                    .then((hash) => {
                        User.findAndUpdate('email', req.body.email, 'password', hash)
                            .then(user => {
                                res.status(200).json({
                                    message : 'Registration succesful.'
                                });
                            });
                    });
            } else {
                res.status(400).json({ message: "Email doesn't exist. Please fill in a valid email." });
            }
        });
});

module.exports = router