import conexao from "./connecion.js";

export async function listarUsuarios(){
    const comando =`
    SELECT * FROM tb_inscricao ;`

    const [linhas] = await conexao.query(comando)
    return linhas;
}

export async function AtualizarUsers(id, inscricao){
    const comando =`
    UPDATE tb_inscricao
    SET bt_visitou = true
    WHERE id_inscricao = ?;
    `
    const [resposta] = await conexao.query(comando, [inscricao.visitou, id]);
    return resposta.affectedRows;
}

