const { db } = require("../database/db");
const multer = require("multer");
const { body, validationResult } = require("express-validator");
const router = require("express").Router();
const postController = require("../controller/post");
const path = require("path");
const { adminChecker } = require("../middleware/role-checker");

// Berarti api ada di /api/post/
// router.get("/", (req,res)=>{
//     res.json({"test": "Halo"})
// })

router.get("/", async (req, res) => {
  try {
    const data = await postController.getAll();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const data = await postController.getOne("id", id);
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `./${process.env.IMAGE_FOLDER}`);
  },
  filename: (req, file, cb) => {
    cb(null, `post-${file.originalname}`);
  },
});
const upload = multer({ storage: fileStorage });

router.post("/add", adminChecker, async (req, res) => {
  body("title", "Please fill in the title.").notEmpty();
  body("content", "Please fill in the content.").notEmpty();
  const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  const post = await postController.getOne("title", req.body.title);
  console.log(post);
  if (post.length === 0) {
    try {
      let data = {
        title: req.body.title,
        content: req.body.content,
        picturePath: req.body.picturePath,
        name: req.session.name,
      };
      await postController.insert(data);
      res.status(200).json({ title: req.body.title });
    } catch (e) {
      res.status(500).json({ error: e });
    }
  } else {
    res
      .status(500)
      .json({ msg: "Title is already used. Please try another title name." });
  }
});

router.post("/pict", adminChecker, upload.single("image"), async (req, res) => {
  console.log(req.file);
  res.status(200).json(`post-${req.file.originalname}`);
});

module.exports = router;
