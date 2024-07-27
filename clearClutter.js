import fs from "fs";
import path from "path";

const dirPath = "C://Users//rroy6//coding//PERSONAL//js-practise//clearClutter//"; //directory in which clutter is to be cleared
var ext;
var dir;
fs.readdir(dirPath, (err, files) => {
     files.forEach((element) => {
          dir = path.join(dirPath, element);
          ext = path.extname(dir);
          if (ext === ".js" || ext === ".json" || ext.length < 1) {
          } 
          else {
               if (fs.existsSync(path.join(dirPath, ext))) {
                    fs.renameSync(path.join(dirPath,element), path.join(dirPath,ext,element))
               } 
               else {
                    fs.mkdirSync(ext);
                    fs.renameSync(path.join(dirPath,element), path.join(dirPath,ext,element))
               }
          }
     });
});

