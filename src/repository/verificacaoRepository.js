import conexao from "./connections.js";

export async function VerificacaoUser(id) {
    try {
        const comando = 'UPDATE tb_inscricao SET bt_verificacao = true WHERE id_inscricao = ?';
        const [resultado] = await conexao.query(comando, [id]);
        
        const linhasAfetadas = resultado.affectedRows;
        
        return linhasAfetadas;
    } catch (error) {
        throw error;
    }
}