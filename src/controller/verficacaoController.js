import { Router } from "express";
import { BuscarUser, VerificacaoUser,DesvalidarUser } from "../repository/verificacaoRepository.js";

const endpoints = Router();

endpoints.put('/verificacao-user/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const verificacao = await VerificacaoUser(id);

        resp.send('validacao feita');
    } 
    
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

endpoints.put('/desvalidacao-user/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const verificacao = await DesvalidarUser(id);

        resp.send('');
    } 

    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

endpoints.get('/buscar-user', async (req, resp) => {
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

export default endpoints