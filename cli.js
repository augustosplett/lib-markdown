import { loadFile } from "./index.js"; 

const caminho = process.argv;

console.log(loadFile(caminho[2]));
