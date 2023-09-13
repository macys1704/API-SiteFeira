import { Router } from "express";
import { inserir, consultarClientes, verificarDuplicado, verificarDuplicadoEmail } from '../repository/inscricaoRepository.js'


let endpoint = Router();

endpoint.post('/inserir', async (req, resp) => {
    try {
        let inscricao = req.body;

        if (!inscricao.nome)
            throw new Error('Campo nome obrigatório')

        if (!inscricao.email)
            throw new Error('Campo email obrigatório')

        if (!inscricao.telefone)
            throw new Error('Campo telefone obrigatório')

        if (!inscricao.bairro)
            throw new Error('Campo bairro obrigatório')

        if (!inscricao.sabendo)
            throw new Error('Campo como ficou sabendo da feira? obrigatório')

        if (!inscricao.foialuno)
            throw new Error('Campo ja foi aluno do FREI obrigatório')

        const duplicado = await verificarDuplicado(inscricao.telefone);
        
        if (duplicado) {
            throw new Error('Telefone já cadastrado.');     
        }

        const duplicadoEmail = await verificarDuplicadoEmail(inscricao.email);

        if(duplicadoEmail){
            throw new Error('Email já cadastrado.');
        }

        const inscricaoinserida = await inserir(inscricao);
        resp.send(inscricaoinserida)


    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoint.get('/consulta', async (req, resp) => {

    let consulta = await consultarClientes()
    resp.send(consulta)

})

export default endpoint;
