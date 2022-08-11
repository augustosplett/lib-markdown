import chalk from 'chalk';
import validaUrls from "./http-validacao.js";
import loadFile from "./index.js";
const caminho = process.argv;

async function processaArquivo(filePath){
    let result = await loadFile(filePath[2]);
    if(filePath[3] === 'validar') {
        console.log(chalk.yellow('Linkis Validados: '), validaUrls(result));
    }else{
        console.log(chalk.yellow('Lista de links:'), result)
    }
}

processaArquivo(caminho);
