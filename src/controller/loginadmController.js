import { Router } from "express";
import { verificarLogin } from "../repository/loginadmRepositoy.js";

const endpoints = Router();

endpoints.post('/login-admin', async (req, resp) => {
  try {
    let {login, senha} = req.body;

    const resposta = await verificarLogin(login, senha);
    
    if(resposta.length < 1)
      throw new Error('Credenciais Inválidas');

    resp.status(204).send();

  } catch (error) {
    resp.status(500).send( error.message );
  }
});

export default endpoints;
