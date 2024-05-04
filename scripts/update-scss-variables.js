const fs = require('fs');
const path = require('path');
require('dotenv').config();

const environmentType = process.env.NODE_ENV.trim() || 'localhost';

const environmentFile = `../env/environment.${environmentType}.js`;

const environment = require(environmentFile).environment;

const scssPath = path.join(__dirname, '..', 'src', 'assets', 'style', '__variables.scss');

const content = `$resource-url: "${environment.deployUrl}/";\n`;

fs.writeFileSync(scssPath, content, err => {
  if (err) {
    console.error('Error al escribir el archivo SCSS:', err);
    return;
  }
  console.log('Archivo SCSS actualizado con éxito.');
});
