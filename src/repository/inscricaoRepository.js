import conexao from './connections.js';

export async function inserir(inscricao) {
    let comando = 'insert into tb_inscricao(nm_nome, nm_ser_chamado, ds_email, nr_telefone, nm_bairro, ds_prev_chegada, ds_sabendo, ds_foialuno) values(?,?,?,?,?,?,?,?)';

    let [resposta] = await conexao.query(comando, [
        inscricao.nm_nome,
        inscricao.nm_ser_chamado,
        inscricao.ds_email,
        inscricao.nr_telefone,
        inscricao.nm_bairro,
        inscricao.ds_prev_chegada,
        inscricao.ds_sabendo,
        inscricao.ds_foialuno
    ])

    inscricao.id = resposta.insertId

    return resposta
}
