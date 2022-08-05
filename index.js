import chalk from 'chalk';
import fs from 'fs';

const arqPath = './arquivos/texto1.md';

function handleError(error){
    throw new Error(chalk.red(error.code, 'File not found'));
}

function loadFile(path){
    const encoding = 'utf-8'
    fs.promises
    .readFile(path, encoding)
    .then( text => console.log(chalk.blue(text)))
    .catch( error => handleError(error))
}

loadFile(arqPath);