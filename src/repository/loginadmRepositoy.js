import conexao from "./connections.js";

export async function verificarLogin() {
  try {
    const comando = `
      SELECT nm_login AS login, ds_senha AS senha
      FROM tb_login_adm
    `;
    const [dados] = await conexao.query(comando);
    return dados[0];
  } catch (error) {
    console.error('Erro ao buscar as credenciais:', error);
    throw error;
  }
}