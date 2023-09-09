create database sitefeiradb;

	use sitefeiradb;

	 drop table tb_inscricao;

	 select * from 	tb_inscricao;

	create table tb_inscricao (
		id_inscricao				int primary key auto_increment,
		nm_nome          			varchar(100),
		ds_email					varchar(30),
		nr_telefone					varchar(20),
		nm_bairro					varchar(20),
        ds_sabendo					varchar(50),
        ds_foialuno					varchar(50)
		
	);