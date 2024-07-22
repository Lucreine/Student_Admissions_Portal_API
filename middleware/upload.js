const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        let folder = '';

        if(req.baseUrl.includes('/university')){
            folder = '../public/logo';
        }else if (req.baseUrl.includes('/admission')){
            folder = '../public/card';
        }
        console.log(folder)
        cb(null, folder);

    },
    filename: (req, file, cb) => {
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ 
    storage: storage,
    checkFileType: function(req, file, cb){
        const filetypes = /jpeg|jpg|png|gif|mp4|mov|avi|pdf/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);
    
        if(mimetype && extname){
        return cb(null, true);
        } else {
        return cb(new Error('Only images and videos are allowed!'));
        }
    } 
});

module.exports = upload;