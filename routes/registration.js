const {db} = require('../database/db');
const router = require('express').Router();
const registController = require('../controller/registration')
const {adminChecker, userChecker} = require('../middleware/role-checker')

// Create TO Participant
router.post("/", userChecker, async (req,res)=>{
    try{
        req.body.user_id = req.session.uid
        await registController.insert(req.body)
        res.status(200).json('Yey berhasil')
    }catch (e) {
        res.status(500).json({error: e})
    }
})

// Participant get semua data registrasi miliknya
router.get("/", userChecker, async (req,res)=>{
    try{
        const data = await registController.getById(req.session.uid)
        res.status(200).json(data)
    }catch (e) {
        res.status(500).json({error: e})
    }
})

// Get peserta untuk admin
router.get("/search", adminChecker, async (req,res)=>{
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

router.put("/verif", adminChecker, async (req, res) => {
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