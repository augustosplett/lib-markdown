import fetch from "node-fetch";

function handleError(err){
    throw new Error(err.message);
}

async function checaStatus(arrayLinks){
    try{
        const arrayStatus = await Promise
            .all(arrayLinks
                .map(async url => {
                    const res = await fetch(url)
                    return res.status;
        }))
        return arrayStatus;
    }catch(err){
        handleError(err);
    }
}

function geraArrayUrls(arrayUrls){
    return arrayUrls
        .map(element => Object.values(element).join())
}

export default async function validaUrls(arrayLinks){
    const links = geraArrayUrls(arrayLinks);
    const statusLinks = await checaStatus(links);
    const resultados = arrayLinks
        .map((obj, index) => ({
            ...obj, status: statusLinks[index]
        }))
    return resultados;
}

