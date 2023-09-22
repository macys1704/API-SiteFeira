import {listarUsuarios,  AtualizarUsers, DesvalidarUsers} from '../repository/comandoRepository.js';

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

// server.put('/verificacao/:id', async (req, resp) => {
//     try{
//         const id  = req.params.id;

//         if(!user.visitou)
//         throw new Error('Valor não valido');

//         if(!user.inscricao)
//         throw new Error('Usuario não pode ser alterado!');

//         const resposta = await AtualizarUsers(id);

//         if(resposta != 1)
//         throw new Error('Usuario não pode ser alterado');

//         else
//             resp.status(204).send();
//     }
//     catch (err){
//         resp.status(400).send({
//             erro: err.message
//         })
//     }
// })

server.put('/verificacao/:id', async (req, resp) => {
    try {
        const id = req.params.id;

        // Verifique se user.visitou e user.inscricao são definidos corretamente
        const user = req.body; // Certifique-se de que os dados do usuário estão no corpo da solicitação

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

        // Verifique se user.visitou e user.inscricao são definidos corretamente
        const user = req.body; // Certifique-se de que os dados do usuário estão no corpo da solicitação

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