import {listarUsuarios,  AtualizarUsers} from '../repository/comandoRepository.js';

import { Router } from 'express';
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

server.put('/listar/:id', async (req, resp) => {
    try{
        const { id } = req.params;
        const user = req.body;

        if(!user.visitou)
        throw new Error('Valor não valido');

        if(!user.inscricao)
        throw new Error('Usuario não pode ser alterado!');

        const resposta = await AtualizarUsers(id, user);

        if(resposta != 1)
        throw new Error('Usuario não pode ser alterado');

        else
            resp.status(204).send();
    }
    catch (err){
        resp.status(400).send({
            erro: err.message
        })
    }
})
export default server;