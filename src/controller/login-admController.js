import { Router } from "express";
import { verificarLogin } from "../repository/login-admRepositoy.js";

let endpoints = Router();

endpoints.get('/login-admin', async(req, resp) =>{
    let r = await verificarLogin();
    resp.send(r)
});

export default endpoints