import {listarUsuarios,  AtualizarUsers, DesvalidarUsers} from '../repository/comandoRepository.js';

import { Router } from 'express';
import { BuscarUser } from '../repository/verificacaoRepository.js';

const server = Router();

server.get('/listar', async (req, resp) => {
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

server.get('/buscar-user', async (req, resp) => {
    try {
        const { nomeEmail }  = req.query; 

        const resultados = await BuscarUser(nomeEmail);

        resp.send(resultados);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

server.put('/verificacao/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const user = req.body;

        if (!user) {
            throw new Error('Valor não válido');
        }

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

server.put('/desvalidacao/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        
        const user = req.body;

        if (!user) {
            throw new Error('Valor não válido');
        }

        const resposta = await DesvalidarUsers(id);
        
        console.log(resposta);

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

export default server;