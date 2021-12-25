const db = require('../database/db');
const User = require('../controller/user');
const router = require('express').Router();
const validator = require('validator');
const bcrypt = require("bcrypt");
const registController = require('../controller/registration')

// Create TO Participant
// TODO implement user_id dari cookie
router.post("/", async (req,res)=>{
    try{
        await db('registration')
            .insert(req.body)
        res.status(200).json('Yey berhasil')
    }catch (e) {
        res.status(500).json({error: e})
    }
})

// Get 1 peserta untuk search by name
// Get semua peserta untuk admin
// TODO implement role checker
router.get("/search", async (req,res)=>{
    try{
        if(req.query.nama){
            const data = await registController.getOne('nama', req.query.nama)
            res.status(200).json(data)
        } else{
            const data = await registController.getAll()
            res.status(200).json(data)
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