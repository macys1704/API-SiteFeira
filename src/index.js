import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import loginadmController from './controller/loginadmController.js'
import inscricaoController from './controller/inscricaoController.js';
import ContadorController from './controller/ContadorController.js'
import VerificacaoUser  from './controller/verficacaoController.js';
import comandoController from './controller/comandoController.js';

let server = express();
server.use(cors())
server.use(express.json())

server.use(inscricaoController);
server.use(loginadmController);
server.use(ContadorController);
server.use(VerificacaoUser);
server.use(comandoController);

server.listen(process.env.PORT, () => console.log('API subiu'))