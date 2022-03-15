const pegaArquivo = require('../index');

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
        
    }
]

const caminho = 'C:/Users/bruno.g.a.oliveira/Documents/projetos-estudo/node/2299-lib-nodejs-markdown-aula-4/test/arquivos-test/texto1.md'
const caminhoSemLink = 'C:/Users/bruno.g.a.oliveira/Documents/projetos-estudo/node/2299-lib-nodejs-markdown-aula-4/test/arquivos-test/texto1_semlinks.md'
const caminhoEmpty = 'C:/Users/bruno.g.a.oliveira/Documents/projetos-estudo/node/2299-lib-nodejs-markdown-aula-4/'


describe('pegaArquivo::', () => {

    it('Deve ser uma funcao', () => {
        expect(typeof pegaArquivo).toBe('function')
    })

    it('Deve retornar um array com resultados', async () => {
        const resultado = await pegaArquivo(caminho)
        expect(resultado).toEqual(arrayResult)
    })

    it('Deve retornar uma mensagem que não há links', async () => {
        const resultado = await pegaArquivo(caminhoSemLink)
        expect(resultado).toBe(erro.code, 'não há links')
    })

})

//test('Deve se ruma funcao', () => {
    //expect(typeof pegaArquivo).toBe('function');
  //});

