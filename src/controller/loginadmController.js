import { Router } from "express";
import { verificarLogin } from "../repository/loginadmRepositoy.js";

const endpoints = Router();

endpoints.get('/login-admin', async (req, resp) => {
  try {
    const credencial = await verificarLogin();
    resp.send(credencial);
  } catch (error) {
    resp.status(500).send( error.message );
  }
});

export default endpoints;
