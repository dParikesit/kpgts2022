const db = require('../database/db')['db'];
const multer = require('multer');
const {body, validationResult} = require('express-validator');
const router = require('express').Router();
const postController = require('../controller/post');


// Berarti api ada di /api/post/
// router.get("/", (req,res)=>{
//     res.json({"test": "Halo"})
// })
router.get("/", async (req,res) => {
    try {
        const data = await postController.getAll();
        res.status(200).json(data)
    } catch(e) {
        res.status(500).json({error: e});
    }
});

router.get("/:id", async (req,res) => {
    let id = req.params.id;
    try {
        const data = await postController.getOne('id', id);
        res.status(200).json(data)
    } catch(e) {
        res.status(500).json({error: e});
    }
});

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `./${process.env.IMAGE_FOLDER}`);
    },
    filename: (req,file,cb) =>{
        cb(null, `post-${path.extname(file.originalname)}`);
    }
});
const upload = multer({storage: fileStorage});

router.post("/add", upload.single('image'),  async (req, res) => {
    body('title','Please fill in the title.').notEmpty();
    body('content','Please fill in the content.').notEmpty();
    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
    }
    const post = await postController.getOne('title', req.body.title);
    if (!(post.title.length > 0)) {
        try {
            let data = {
                title: req.body.title,
                content: req.body.content,
                picture:'',
                user_id: req.session.uid // FIX INI
            }
            if(req.file)
                picture = `post-${path.extname(req.file.originalname)}`;
            data.picture = picture;

            await postController.insert(data);
        } catch(e) {
            res.status(500).json({error: e});
        }
    } else {
        res.status(500).json({msg: 'Title is already used. Please try another title name.'});
    }
});

module.exports = router