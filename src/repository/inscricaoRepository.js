import conexao from './connections.js';

export async function inserir(inscricao) {
    let comando = 'insert into tb_inscricao(nm_nome, ds_email, nr_telefone, nm_bairro, ds_sabendo, ds_foialuno) values(?,?,?,?,?,?)';

    let [resposta] = await conexao.query(comando, [
        inscricao.nm_nome,
        inscricao.ds_email,
        inscricao.nr_telefone,
        inscricao.nm_bairro,
        inscricao.ds_sabendo,
        inscricao.ds_foialuno
    ])

    inscricao.id = resposta.insertId

    return resposta
}
