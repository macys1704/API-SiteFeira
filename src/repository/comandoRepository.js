import conexao from "./connections.js";


export async function listarUsuarios(){
    const comando =`
    SELECT * FROM tb_inscricao ;`

    const [linhas] = await conexao.query(comando)
    return linhas;
}

export async function AtualizarUsers(id){
    const comando =`
    UPDATE tb_inscricao
    SET bt_verificacao = true
    WHERE id_inscricao = ?;
    `
    const [resposta] = await conexao.query(comando, [id]);
    return resposta.affectedRows;
}

