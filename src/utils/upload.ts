//upload file
import path from "path";
import multer from "multer";
const storage = multer.diskStorage({
    destination: function (req: any, file: any, cb: any) {
      cb(null, path.join(__dirname, "../public/upload"));
    },
    filename: function (req: any, file: any, cb: any) {
      cb(null, Date.now() + file.fieldname);
    },
  });
export  const upload = multer({ storage: storage });