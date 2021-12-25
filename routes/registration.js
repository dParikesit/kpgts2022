const db = require('../database/db');
const User = require('../controller/user');
const router = require('express').Router();
const validator = require('validator');
const bcrypt = require("bcrypt");

// Create TO Participant
router.post("/", async (req,res)=>{
    try{
        const valid = validator.isAlpha(req.body.nama.replace(/\s+/g, '')) && validator.isAlphanumeric(req.body.sekolah.replace(/\s+/g, '')) && (validator.equals(req.body.jurusan, 'IPA') || validator.equals(req.body.jurusan, 'IPS')) && validator.isAlphanumeric(req.body.kontak.replace(/\s+/g, '')) && validator.isUUID(req.body.user_id)
        if(valid){
            await db('registration')
                .insert(req.body)
            res.status(200).json('Yey berhasil')
        } else{
            throw "Validation error"
        }
    }catch (e) {
        res.status(500).json({error: e})
    }
})

router.post("/registration", (req,res) => {
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

router.get('/logout',(req,res) => {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router