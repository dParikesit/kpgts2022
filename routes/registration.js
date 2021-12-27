const db = require('../database/db')['db'];
const router = require('express').Router();
const registController = require('../controller/registration')

// Create TO Participant
// TODO implement user_id dari cookie
router.post("/", async (req,res)=>{
    try{
        await registController.insert(req.body)
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
            const data = await registController.getFiltered('nama', req.query.nama)
            res.status(200).json(data)
        }else{
            const data = await registController.getAll()
            res.status(200).json(data)
        }
    }catch (e) {
        res.status(500).json({error: e})
    }
})

router.put("/verif", async (req, res) => {
    try {
        let userId = req.body.id;
        let val = true;
        const data = await registController.findAndUpdate('id', userId, 'verified', val);
        res.status(200).json(data);
    } catch(e) {
        res.status(500).json({error : e});
    }
});


module.exports = router