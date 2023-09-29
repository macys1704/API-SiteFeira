import conexao from "./connections.js";

export async function verificarLogin(login, senha) {
    const comando = `
      SELECT nm_login AS login, ds_senha AS senha
        FROM tb_login_adm
       WHERE nm_login = ?
         AND ds_senha = ?
    `;
    const [dados] = await conexao.query(comando, [login, senha]);
    return dados;
}

export async function consultarClientesadm() {
  let comando = 'select * from tb_login_adm'

  let [resposta] = await conexao.query(comando)

  return resposta
}