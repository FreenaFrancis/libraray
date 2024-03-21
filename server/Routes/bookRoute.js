const router = require('express').Router();
const bookModel = require('../models/bookModel');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  }
});

const uploadMiddleware = multer({
  storage: storage
});

router.post('/addbooks', uploadMiddleware.single('file'), (req, res) => {
  const { name, description, author, price } = req.body;
  const imagePath = req.file.path; // This will give you the path of the uploaded file

  const newBook = {
    name,
    description,
    author,
    price,
    image: imagePath,
  };

  bookModel.create(newBook)
    .then(result => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

module.exports = router;
