create database sitefeiradb;

	use sitefeiradb;

	 drop table tb_inscricao;

	 select * from 	tb_inscricao;

	create table tb_inscricao (
		id_inscricao				int primary key auto_increment,
		nm_nome          			varchar(100),
		ds_email					varchar(100),
		nr_telefone					varchar(20),
		nm_bairro					varchar(100),
        ds_sabendo					varchar(100),
        ds_foialuno					varchar(100),
        bt_verificacao				boolean
	);