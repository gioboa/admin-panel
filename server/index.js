const express = require('express');
const { readAndCreateFile, cleanDirectory } = require('./utils');
const components = require('./components.config');

const app = express();

cleanDirectory('components');

components.forEach(({ name, url }) => readAndCreateFile(name, url));

app.use('/components', express.static(`${__dirname}/components`));

app.listen(3001, function() {
  console.log('Example app listening on port 3001!');
});
