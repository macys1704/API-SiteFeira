import { Router } from "express";
import { consultarClientesadm, verificarLogin } from "../repository/loginadmRepositoy.js";

const endpoints = Router();

endpoints.post('/login-admin', async (req, resp) => {
  try {
    let {login, senha} = req.body;

    const resposta = await verificarLogin(login, senha);
    
    if(resposta.length < 1)
      throw new Error('Credenciais Inválidas');

    resp.status(204).send();

  } catch (err) {
    resp.status(500).send( {erro: err.message} );
  }
});



endpoints.get('/consultaadm', async (req, resp) => {
  try {
      let consulta = await consultarClientesadm()
      resp.send(consulta)
      
  } catch (err) {
      resp.status(400).send(
          {
              erro: err.message
          }
      )   
  }
})

export default endpoints;
