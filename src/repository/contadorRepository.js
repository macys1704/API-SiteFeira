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

export async function getSala(id) {
    const comando = `select 
        DS_salas as Sala,
        DS_apresentação as Descricao,
        DS_andar as Andar,
        NR_pessoas as Quantidade_Visitantes
    from TB_salas
    WHERE ID_salas = ?`

    const [resposta] = await connection.query(comando, [id]); 

    return resposta;
}


export async function get(){
    const comando = `select 
    DS_salas as Sala,
    DS_apresentação as Descricao,
    DS_andar as Andar,
    NR_pessoas as Quantidade_Visitantes
    from TB_salas;`

    const resposta = await connection.query(comando);
    
    return resposta;
}

export async function totalUsr(){
    const comando = `SELECT COUNT(*) AS Verificados FROM tb_inscricao where bt_verificacao = true`

    const [resposta] = await connection.query(comando); 
    return resposta[0];
}

export async function totalCadastros() {
    const comando = `SELECT COUNT(*) AS UserCadastros FROM tb_inscricao`

    const [resposta] = await connection.query(comando); 
    return resposta[0];
}