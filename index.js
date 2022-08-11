import chalk from 'chalk';
import fs from 'fs';

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

export default async function loadFile(path){
    try{
        const encoding = 'utf-8';
        const arquivo = await fs.promises.readFile(path, encoding);
        return extraiLinks(arquivo);
    }catch (err){
        handleError(err);
    }
}