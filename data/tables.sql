drop table biz_card_status;
drop table biz_cards;
drop table biz_card_icon;

create table biz_card_status
(
	status_id INT not null,
	name varchar(64) not null,
	PRIMARY KEY (status_id)

);

insert into biz_card_status(status_id,name) values(1,'CREATED');
insert into biz_card_status(status_id,name) values(2,'ACTIVE');
insert into biz_card_status(status_id,name) values(3,'PAUSED');
insert into biz_card_status(status_id,name) values(4,'CANCELATED');
insert into biz_card_status(status_id,name) values(5,'PENDING');

CREATE TABLE biz_cards (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	created_at timestamp NULL DEFAULT now(),
	reference varchar(12) NULL,
	since_date varchar(12) NULL,
	until_date varchar(12) NULL,
	client_id varchar NOT NULL,
	status int4 NOT NULL,
	icon varchar(20) NOT NULL,
	op_cardholder_id varchar(64) NOT NULL,
	op_card_id varchar(64) NOT NULL,
	op_affinity_id varchar(64) NOT NULL,
	op_issuer_id varchar(64) NOT NULL,
	CONSTRAINT biz_cards_pkey PRIMARY KEY (id)
);

create table biz_card_icon
(
	icon varchar(20),
	descrip varchar(30),
	op_affinity_id varchar(64)
);

insert into biz_card_icon(icon,descrip,op_affinity_id) values('billete','Billete con alas','417100137BF11B08D62F');
insert into biz_card_icon(icon,descrip,op_affinity_id) values('chanchito','Chanchito','4171001303171F832BFC');
insert into biz_card_icon(icon,descrip,op_affinity_id) values('corona','Corona','4171001342401A43037B');
insert into biz_card_icon(icon,descrip,op_affinity_id) values('diamante','Diamanete','41710013C82B1EEF65C5');
insert into biz_card_icon(icon,descrip,op_affinity_id) values('emoji','Emoji','417100132EA305A5EC33');
insert into biz_card_icon(icon,descrip,op_affinity_id) values('sin_icono','Sin icono','41710013116F318796A0');
insert into biz_card_icon(icon,descrip,op_affinity_id) values('unicorn','Unicorn','41710013224C2B12916B');
insert into biz_card_icon(icon,descrip,op_affinity_id) values('virtual','Virtual','41710012E0A50D28DE69');