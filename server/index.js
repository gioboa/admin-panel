const express = require('express');
const { readAndCreateFile, cleanDirectory } = require('./utils');
const components = require('./components.config');

const app = express();

cleanDirectory('components');

components.forEach(({ fileName, src }) => readAndCreateFile(fileName, src));

app.use('/components', express.static(`${__dirname}/components`));

app.listen(3001, function() {
  console.log('Example app listening on port 3001!');
});
