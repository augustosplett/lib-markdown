import chalk from 'chalk';
import fs from 'fs';

const arqPath = './arquivos/texto1.md';

function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(texto)) !== null) {
      arrayResultados.push({ [temp[1]]: temp[2] })
    }
    return arrayResultados;
}

function handleError(error){
    throw new Error(chalk.red(error.code, 'File not found'));
}

function loadFile(path){
    const encoding = 'utf-8'
    fs.promises
    .readFile(path, encoding)
    .then( text => console.log(extraiLinks(text)))
    .catch( error => handleError(error))
}

loadFile(arqPath);