const multer = require('multer');
const uploadImage= multer({
    storage:multer.diskStorage({
        destination:function(req, file, cb){
            cb(null, 'uploadImageFiles');

        },
        filename:function(req, file, cb){
            cb(null,file.fieldname+"-"+date.now());
        }
        
        
    })
}).single("user_file");
var upload= multer({storage:storage})

exports.module=uploadImage;