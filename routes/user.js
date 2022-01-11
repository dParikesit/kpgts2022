const router = require('express').Router()
const User = require("../controller/user");
const Registration = require("../controller/registration");
const mailer = require("../mailer");
const {body, validationResult} = require('express-validator');
const bcrypt = require("bcrypt");
const crypto = require('crypto')
const Reset = require("../controller/reset")

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
    if (req.session.name!==undefined) {
        console.log(req.session.name)
        res.send({ loggedIn: true, name: req.session.name, role: req.session.role,email: req.session.email});
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
                        req.session.name = user.name;
                        req.session.role = user.role;
                        req.session.email = user.email;
                        console.log(req.session);
                        // req.session.save()
                        res.status(200).json({name : user.name, role:user.role});
                    } else {
                        res.status(404).json("Wrong email/password combination!");
                    }
                });
            } else {
                res.status(404).json("User doesn't exist. Please try to login again.");
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
        console.log(req.session)
    });
});

router.post('/resetpassword', async(req, res) => {
    body('email','Email is invalid. Please input a valid email address.').exists().isEmail();
    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
    }

    const user = await User.getOneEmail(req.body.email)
    if(user){
        const token = crypto.randomBytes(64).toString('hex');
        try{
            await mailer.send ({
                template: 'reset_password',
                message: {
                    to: req.body.email
                },
                locals: {
                    link: `${process.env.ORIGIN_URL}/reset_password/${token}`,
                    image: `${process.env.ORIGIN_URL}/assets/logo.png`
                }
            });
            await Reset.insert(token, user.id)
        }catch(e){
            res.status(500).json(e)
        }
        res.status(200).json(`Sukses`)
    } else{
        res.status(400).json({ message: "Email doesn't exist. Please fill in a valid email." });
    }
});

router.put('/resetpassword/:token', async(req,res) => {
    body('newPass','Password is invalid (empty or length less than 8 characters).').notEmpty().isLength({min:8});
    body('confirmPass','Password confirmation is required.').notEmpty();

    let errors = validationResult(req);
    if (req.body.confirmPass !== req.body.newPass) {
        errors["confirmPass"] = "Password confirmation is not matched";
    }

    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
    }

    try{
        const id = (await Reset.getOne(req.params.token)).user_id

        if(id){
            const hashed = await bcrypt.hash(req.body.newPass, 10)
            await User.findAndUpdate('id', id, 'password', hashed)
            await Reset.remove(req.params.token)
            res.status(200).json("Sukses")
        } else{
            throw "Not found"
        }
    } catch (e) {
        res.status(500).json(e)
    }
});

router.get('/profile', async(req,res)=>{
    try{
        const data = await Registration.getById(req.session.uid)
        if(data.length===0){
            res.status(404)
        } else{
            const total = data.length
            const verified = (data.filter(item=>item.verified===true)).length
            res.status(200).json({verified, total})
        }
    }catch (e) {
        res.status(500).json(e)
    }
})

module.exports = router