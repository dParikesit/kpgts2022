const router = require('express').Router();
const registController = require('../controller/registration')
const {adminChecker, userChecker} = require('../middleware/role-checker')

// Create TO Participant
router.post("/", userChecker, async (req,res)=>{
    try{
        if (!Array.isArray(req.body)){
            req.body.user_id = req.session.uid
        }else{
            req.body.forEach((item)=>{
                item.user_id = req.session.uid
            })
        }
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
        if(data.length===0){
            res.status(404).json(data)
        }else{
            res.status(200).json(data)
        }

    }catch (e) {
        res.status(500).json({error: e})
    }
})

// Get peserta untuk admin
router.get("/search", adminChecker, async (req,res)=>{
    try{
        if(req.query.nama){
            const data = await registController.getFiltered('nama', req.query.nama)
            if(data.length===0){
                res.status(404).json(data)
            } else{
                res.status(200).json(data)
            }
        }else if(req.query.jurusan){
            const data = await registController.getFiltered('jurusan', req.query.jurusan)
            if(data.length===0){
                res.status(404).json(data)
            } else{
                res.status(200).json(data)
            }
        }else if(req.query.verif){
            const data = await registController.getFiltered('verified', req.query.verif)
            if(data.length===0){
                res.status(404).json(data)
            } else{
                res.status(200).json(data)
            }
        }else{
            const data = await registController.getAll()
            if(data.length===0){
                res.status(404).json(data)
            } else{
                res.status(200).json(data)
            }
        }
    }catch (e) {
        res.status(500).json({error: e})
    }
})

// Verifikasi semua dengan user_id tertentu
router.put("/verif/:id", adminChecker, async (req, res) => {
    try {
        console.log(req.params.id)
        const data = await registController.invertVerifBool(req.params.id)
        res.status(200).json(data);
    } catch(e) {
        res.status(500).json({error : e});
    }
});


module.exports = router