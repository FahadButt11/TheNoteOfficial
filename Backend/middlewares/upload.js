const multer= require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads"); // Directory to store files
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`); // Unique file name
    },
  });
  const upload = multer({ storage: storage });
module.exports= upload;