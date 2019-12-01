const path = require('path');
const request = require('request');
const fs = require('fs');
const rimraf = require('rimraf');

const cleanDirectory = directory => {
  rimraf.sync(`${__dirname}/${directory}`);
};

const readAndCreateFile = (componentName, url) => {
  const options = {
    url: url,
    method: 'GET',
    accept: 'application/json'
  };
  const dir = `${__dirname}/components/`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  const path = dir + componentName;
  const ws = fs.createWriteStream(path);

  request(options)
    .on('error', function(error) {
      console.log(error);
    })
    .on('close', function() {
      console.log(`${componentName} loaded`);
    })
    .pipe(ws);
};

module.exports = {
  readAndCreateFile,
  cleanDirectory
};
