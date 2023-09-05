import { Router } from "express";
import { verificarLogin } from "../repository/loginadmRepositoy.js";

const endpoints = Router();

endpoints.get('/login-admin', async (req, resp) => {
  try {
    const credencial = await verificarLogin();
    resp.json(credencial);
  } catch (error) {
    resp.status(500).json({ error: 'Erro ao buscar as credenciais' });
  }
});

export default endpoints;