//const shell = require('shelljs');
import shell from 'shelljs'

const addParams = process.argv; 
let file='';
if (addParams[2] === 'file' && addParams[3]) {
file += addParams[3];
}
shell.exec(`npx mocha --timeout=90000 ${file}`)