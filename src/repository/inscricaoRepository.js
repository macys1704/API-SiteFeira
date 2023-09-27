import conexao from './connections.js';

export async function inserir(inscricao) {
    let comando = 'insert into tb_inscricao(nm_nome, ds_email, nr_telefone, nm_bairro, ds_sabendo, ds_foialuno, bt_verificacao) values(?,?,?,?,?,?, false)';

    let [resposta] = await conexao.query(comando, [
         inscricao.nome,
         inscricao.email,
         inscricao.telefone,
         inscricao.bairro,
         inscricao.sabendo,
         inscricao.foialuno,
    ])

    inscricao.id = resposta.insertId

    return resposta
}

export async function consultarClientes() {
    let comando = 'select * from tb_inscricao'

    let [resposta] = await conexao.query(comando)

    return resposta
}

export async function BuscarUser(NomeEmail){
    const comando = ' select * from tb_inscricao where nm_nome like ?  or ds_email = ? ';
    const [resultado] = await conexao.query(comando, [`%${NomeEmail}%`, NomeEmail]);


    return resultado;
}

export async function verificarDuplicadoEmail(email) {
    const comando = 'SELECT * FROM tb_inscricao WHERE ds_email = ?';
    
    
    const [resposta] = await conexao.query(comando, [email]);
    
    
    if (resposta.length != 0) {
        return true;
    } else {
        return false;
    }
}

