import connection from "../repository/connections.js";

export async function ContadorAdicionar(parms){
    const comando = ` update TB_salas set NR_pessoas = NR_pessoas + 1 where ID_salas = ? ;`

    const dados = await connection.query(comando, [parms]);

    const resposta = dados.affectedRows;

    return resposta
}

export async function ContadorRemover(parms){
    const comando = ` update TB_salas set NR_pessoas = NR_pessoas  - 1  where ID_salas = ? and TB_salas.NR_pessoas > 0;`

    const dados = await connection.query(comando, [parms]);  

    const resposta = dados.affectedRows;

    return resposta;
}




export async function get(){
    const comando = 'select * from TB_salas'

    const resposta = await connection.query(comando);
    
    return resposta
}

