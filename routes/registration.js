const router = require('express').Router();
const registController = require('../controller/registration')
const userController = require('../controller/user')
const mailer = require("../mailer");
const {adminChecker, userChecker} = require('../middleware/role-checker')

//Get apakah TO masih buka
router.get("/cekopen", async (req,res)=>{
    try{

        if(process.env.OPREG === 'open'){
            res.status(200).end()
        } else{
            res.status(403).end()
        }
    }catch (e) {
        res.status(500).json(e)
    }
})

// Create TO Participant
router.post("/", userChecker, async (req,res)=>{
    try{
        const user = userController.getOne(req.session.uid)
        if(user.registered===true){
            throw "Already registered"
        }

        if (!Array.isArray(req.body)){
            req.body.user_id = req.session.uid
        }else{
            req.body.forEach((item)=>{
                item.user_id = req.session.uid
            })
            console.log(req.body)
        }
        await registController.insert(req.body)
        await userController.setRegistered(req.session.uid)
        res.status(200).json('Yey berhasil')
    }catch (e) {
        res.status(500).json(e)
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
            const data = await registController.getFiltered('rumpun', req.query.jurusan)
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

router.get('/registered', async(req,res)=>{
    const data = await registController.getById(req.session.uid)
    if(data.length===0){
        res.status(404).end()
    } else{
        res.status(200).json(data)
    }
})

router.get('/registeredCheck', async(req,res)=>{
    try{
        const data = await userController.getOne(req.session.uid)
        if(data.registered==false){
            res.status(404).end()
        } else{
            res.status(200).json("Sukses")
        }
    }catch (e) {
        res.status(500).json(e)
    }
})

router.post('/verifmail/:id', adminChecker, async(req,res)=>{
    try{
        const user = await registController.getOne(req.params.id)
        await mailer.send ({
            template: 'verif_to',
            message: {
                to: user.email
            },
            locals: {
                image: `${process.env.ORIGIN_URL}/assets/logo.png`,
                peserta: user.nama,
                tanggal: user.tanggal,
                sesi: user.sesi
            }
        });
    }catch (e) {
        res.status(500).json(e)
    }
    res.status(200).json(`Sukses`)
})

module.exports = router