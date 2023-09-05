import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import loginadmController from './controller/loginadmController.js'
import inscricaoController from './controller/inscricaoController.js';

let server = express();
server.use(cors())
server.use(express.json())

server.use(inscricaoController);
server.use(loginadmController);

server.listen(process.env.PORT, () => console.log('API subiu'))