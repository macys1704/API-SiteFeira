import conexao from "./connections.js";

export async function verificarLogin(){
    let comando = `
    select ds_login      as login,
           ds_senha             as senha
      from tb_login_adm`;

    let [dados] = await conexao.query(comando);
    return dados;
}