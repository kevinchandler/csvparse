// Parse all files in directory (argv[2])
// write to data.csv
// example usage: node parseDir.js ./data-pull

const fs = require('fs'),
      directory = process.argv[2];

if (!directory) { return new Error('Directory not given') }

// get file names
const getFiles = (dir, files_) => {
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files){
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
}

const fileNames = getFiles(directory);
var csvArray = []

fileNames.forEach((fileName) => {
  var fileBody = fs.readFileSync(fileName, 'utf8');
  csvArray.push(fileBody)
});

fs.writeFile('data.csv', csvArray, (err) => {
  if (err) { throw err }
})
