create table TB_salas  (

	ID_salas				int primary key auto_increment not null,
    DS_salas				varchar(50) not null,
	DS_apresentação			varchar(50) not null,
	DS_andar				varchar(50) not null,
	NR_pessoas				int not null

);

select * from TB_salas;


insert into TB_salas 
(DS_salas, DS_apresentação, DS_andar, NR_pessoas)
        values
	('Sala 4', 'Ótica Brauzo', 'Pátio', 0),
	('Sala 5', 'Apresentação de Cursos', 'Pátio', 0),
	('Sala 6', 'Bate papo sobre as Escolhas de Profissões', 'Pátio', 0),
    
	('Sala 17', 'Posto de Saúde', '1º', 0),
	('Sala 18', 'ADM - RH e POC', '1º', 0),
	('Sala 19', 'ADM - Empreendedorismo e Logística', '1º', 0),
    
	('Sala 24', 'Comunicação Visual', '2º', 0),
	('Sala 25', 'Informática - Montagem, Configuração e Redes', '2º', 0),
	('Sala 26', 'Informática - Programação', '2º', 0),
    
	('AUDITORIO', 'CATE e Simulação de Entrevista', '3º', 0),
	('AUDITORIO', 'SAS', '3º', 0),
	('Sala 33', 'LINKEDIM', '3º', 0);
    
    
    -- aumentar contador
					update TB_salas set NR_pessoas = NR_pessoas + 1 where ID_salas = 1;
    
    -- diminuir contador 
					update TB_salas set NR_pessoas = NR_pessoas  - 1  where ID_salas = 1 and TB_salas.NR_pessoas > 0;
                    