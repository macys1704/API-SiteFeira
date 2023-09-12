import { Router } from "express";
import { ContadorAdicionar, ContadorRemover, get, getSala, totalUsr, totalCadastros } from "../repository/contadorRepository.js";

const endpoints = Router();

endpoints.get('/pesquisar', async (req, resp) =>{
    const resposta = await get();
    resp.send(resposta);
})

endpoints.get('/pesquisar/:id', async (req, resp) =>{
    const gg = req.params.id;
    const resposta = await getSala(gg);
    resp.send(resposta);
})

endpoints.get('/total', async (req, resp) => {
    const resposta = await totalUsr();
    resp.send(resposta);
})

endpoints.get('/totalcadastros', async (req, resp) => {
    const resposta = await totalCadastros();
    resp.send(resposta);
})


endpoints.put('/adicionar/:id', async (req, resp) => {
    try {
        const gg = req.params.id;
        const resposta = await ContadorAdicionar(gg);
        
        resp.send(resposta);
    } 
    
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

endpoints.put('/diminuir/:id', async (req, resp) => {
    try {
        const gg = req.params.id;
        const resposta = await ContadorRemover(gg);
        
        resp.send(resposta);
    } 
    
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

export default endpoints;