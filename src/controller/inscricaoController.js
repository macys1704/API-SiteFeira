import { Router } from "express";
import { inserir, consultarClientes, verificarDuplicadoEmail, BuscarUser } from '../repository/inscricaoRepository.js'
import {listarUsuarios,  AtualizarUsers, DesvalidarUsers} from '../repository/comandoRepository.js';

let endpoint = Router();

endpoint.post('/inserir', async (req, resp) => {
    try {
        let inscricao = req.body;

        if (!inscricao.nome)
            throw new Error('Campo "Nome" obrigatório.')

        if (!inscricao.email)
            throw new Error('Campo "Email" obrigatório.')

        if (!inscricao.telefone)
            throw new Error('Campo "Telefone" obrigatório.')

        if (!inscricao.bairro)
            throw new Error('Campo "Bairro" obrigatório.')

        if (!inscricao.sabendo)
            throw new Error('Campo "Como ficou sabendo da feira?" obrigatório.')

        if (!inscricao.foialuno)
            throw new Error('Campo "Já foi aluno do FREI?" obrigatório.')

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

endpoint.get('/listar', async (req, resp) => {
    try{
        const resposta = await listarUsuarios();
        resp.send(resposta);
    }
    catch (err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoint.get('/buscar-user', async (req, resp) => {
    try {
        let { nomeEmail }  = req.query; 

        if(!nomeEmail)
            nomeEmail = '';

        const resultados = await BuscarUser(nomeEmail);

        resp.send(resultados);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

endpoint.put('/verificacao/:id', async (req, resp) => {
    try {
        const id = req.params.id;

        const resposta = await AtualizarUsers(id);

        if (resposta !== 1) {
            throw new Error('Usuário não pode ser alterado');
        } else {
            resp.status(204).send();
        }
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

endpoint.put('/desvalidacao/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        
        const resposta = await DesvalidarUsers(id);

        if (resposta !== 1) {
            throw new Error('Usuário não pode ser alterado');
        } else {
            resp.status(204).send();
        }
        
    } catch (err) {
        console.log(err.message);
        resp.status(400).send({
            erro: err.message
        });
    }
});

export default endpoint;
