
const fetch = (...args) => import('node-fetch')
    .then(({default: fetch}) => fetch(...args));


function handleError(erro){
   throw new Error(erro.message)
}


async function checkaStatus(arrayURLs){

    try {
        const arrayStatus = await Promise
        .all(arrayURLs
            .map( async url => {
        const res = await fetch(url)
        return res.status
        }))
    return arrayStatus   

    } catch (erro) {

        handleError(erro)
        
    }

    

}


function geraArrayDeURLs(arrayLinks){
    // pega o objeto e retorna um array apenas com o valor(sem a chave)
    // Object.values()
    // Object values retorna cada valor em um array e ai utulizamos o join
    // join() = tira o objeto do array e tranforma em uma string

    return arrayLinks
        .map( objetoLink => Object
            .values(objetoLink).join())
   

}

async function validaURLs(arrayLinks){
  const links = geraArrayDeURLs(arrayLinks)
  const statusLink = await checkaStatus(links)
  // Spread operator
  // "espalha" o objeto, abrindo para inserir mais informacoes
  const resultados = arrayLinks.map((objeto, indice) => ({
      ...objeto, 
      //incluimos mais um item de chave|valor
      status: statusLink[indice]
    }))

  return resultados  
}

module.exports = validaURLs