const db = require('../database/db');
const router = require('express').Router();

// Create TO Participant
router.post("/", async (req,res)=>{
    try{
        await db('registration')
            .insert(req.body)
        res.status(200).json('Yey berhasil')
    }catch (e) {
        res.status(500).json({error: e})
    }
})

module.exports = router