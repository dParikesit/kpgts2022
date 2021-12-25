const db = require('../database/db');
const router = require('express').Router();
const validator = require('validator');

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

module.exports = router