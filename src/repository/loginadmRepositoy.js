import conexao from "./connections.js";

export async function verificarLogin() {
    const comando = `
      SELECT nm_login AS login, ds_senha AS senha
      FROM tb_login_adm
    `;
    const [dados] = await conexao.query(comando);
    return dados[0];
}
