import { Router } from "express";
import { inserir, consultarClientes, verificarDuplicadoEmail } from '../repository/inscricaoRepository.js'


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
    try {
        let consulta = await consultarClientes()
        resp.send(consulta)
        
    } catch (err) {
        resp.status(400).send(
            {
                erro: err.message
            }
        )   
    }
})

export default endpoint;
