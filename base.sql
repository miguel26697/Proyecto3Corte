drop database sergio;
create database sergio; 
use sergio;

create table usuario(
correo varchar(100) primary key,
nombre varchar(30),
clave varchar(10)
);

create table descripcion(
id_descripcion varchar(20) primary key,
ventilacion varchar(40),
num_computadores int,
proyector varchar(2),
televisor varchar(2),
sillas varchar (20),
toma_corriente int,
tablero varchar(20)
);

insert into descripcion values ("1","Natural",1,"Si","No","Individuales",4,"Sencillo");
insert into descripcion values ("2","Aire acondicionado",1,"Si","No","Individuales",4,"Doble");
insert into descripcion values ("3","Natural",1,"Si","No","Oficina",4,"Sencillo");
insert into descripcion values ("4","Aire acondicionado",1,"Si","Si","oficina",10,"Sencillo");
insert into descripcion values ("5","Aire acondicionado",1,"No","Si","Individuales",6,"sencillo");

create table salones(
id_salon varchar(20) primary key,
capacidad integer,
tipo varchar(30),
id_descripcion varchar(20),
foreign key (id_descripcion) references descripcion(id_descripcion)
);

insert into salones values ("F101",20,"Salon","1");
insert into salones values ("F102",30,"Salon","4");
insert into salones values ("F103",10,"Salon","3");
insert into salones values ("F201",20,"Salon","2");
insert into salones values ("F202",30,"Salon","4");
insert into salones values ("F203",10,"Salon","1");
insert into salones values ("F301",20,"Salon","1");
insert into salones values ("F302",30,"Salon","4");
insert into salones values ("F303",10,"Salon","3");
insert into salones values ("F401",20,"Salon","2");
insert into salones values ("F402",30,"Salon","4");
insert into salones values ("F403",10,"Salon","1");
insert into salones values ("F501",20,"Salon","1");
insert into salones values ("F502",30,"Salon","4");
insert into salones values ("F503",10,"Salon","3");
insert into salones values ("F601",20,"Salon","2");
insert into salones values ("F702",30,"Salon","4");
insert into salones values ("F703",10,"Salon","1");

insert into salones values ("E101",20,"Salon","1");
insert into salones values ("E201",20,"Salon","1");
insert into salones values ("A101",30,"Salon","4");
insert into salones values ("A102",10,"Salon","3");
insert into salones values ("A103",20,"Salon","2");
insert into salones values ("B101",30,"Laboratorio","4");
insert into salones values ("B102",10,"Salon","1");
insert into salones values ("B103",20,"Salon","1");
insert into salones values ("B104",20,"Salon","1");
insert into salones values ("B105",20,"Salon","1");
insert into salones values ("B201",30,"Salon","4");
insert into salones values ("B202",10,"Salon","3");
insert into salones values ("B203",20,"Salon","2");
insert into salones values ("B301",30,"Salon","4");
insert into salones values ("B302",10,"Salon","1");
insert into salones values ("B303",20,"Salon","1");
insert into salones values ("B401",30,"Salon","4");
insert into salones values ("B402",10,"Salon","3");
insert into salones values ("B403",20,"Salon","2");
insert into salones values ("B501",30,"Salon","4");
insert into salones values ("B502",10,"Salon","1");


create table reserva(
id_reserva integer auto_increment primary key,
id_salon varchar(20),
foreign key (id_salon) references salones(id_salon),
dia_reserva date,
hora_resrva time,
tema varchar(50)
);

create table horario(
id_horario int auto_increment primary key,
dia varchar(100),
hora varchar(100),
id_salon varchar(20),
clase varchar(30),
foreign key (id_salon) references salones(id_salon)
);



insert into horario (dia,hora,id_salon,clase) values("1","1","F101","Calculo");
insert into horario (dia,hora,id_salon,clase)values("1","2","F101","LEA");
insert into horario (dia,hora,id_salon,clase)values("1","5","F101","Sistemas 1");
insert into horario (dia,hora,id_salon,clase)values("2","1","F101","Redes");
insert into horario (dia,hora,id_salon,clase)values("2","2","F101","Fisica");
insert into horario (dia,hora,id_salon,clase) values("2","5","F101","Dibujo");
insert into horario (dia,hora,id_salon,clase)values("3","1","F101","Telematica 1");
insert into horario (dia,hora,id_salon,clase)values("3","2","F101","Telematica 2");
insert into horario (dia,hora,id_salon,clase) values("3","4","F101","Cambio Climatico");
insert into horario (dia,hora,id_salon,clase)values("4","1","F101","Programacion ");
insert into horario (dia,hora,id_salon,clase)values("4","2","F101","Analisis de Circuitos");
insert into horario (dia,hora,id_salon,clase) values("4","4","F101","Modelacion");
insert into horario (dia,hora,id_salon,clase) values("5","1","F101","Calculo 1");
insert into horario (dia,hora,id_salon,clase) values("5","7","F101","Proyectos");
insert into horario (dia,hora,id_salon,clase) values("5","5","F101","Electromagnetica");
insert into horario (dia,hora,id_salon,clase)values("6","1","F101","Mecanica");
insert into horario (dia,hora,id_salon,clase)values("6","2","F101","Integral");
insert into horario (dia,hora,id_salon,clase) values("6","4","F101","Diseño UX");

insert into horario (dia,hora,id_salon,clase) values("1","1","F201","Calculo");
insert into horario (dia,hora,id_salon,clase)values("1","2","F201","LEA");
insert into horario (dia,hora,id_salon,clase)values("1","5","F201","Sistemas 1");
insert into horario (dia,hora,id_salon,clase)values("2","1","F201","Redes");
insert into horario (dia,hora,id_salon,clase)values("2","2","F201","Fisica");
insert into horario (dia,hora,id_salon,clase) values("2","5","F201","Dibujo");
insert into horario (dia,hora,id_salon,clase)values("3","1","F201","Telematica 1");
insert into horario (dia,hora,id_salon,clase)values("3","2","F201","Telematica 2");
insert into horario (dia,hora,id_salon,clase) values("3","4","F201","Cambio Climatico");
insert into horario (dia,hora,id_salon,clase)values("4","1","F201","Programacion ");
insert into horario (dia,hora,id_salon,clase)values("4","2","F201","Analisis de Circuitos");
insert into horario (dia,hora,id_salon,clase) values("4","4","F201","Modelacion");
insert into horario (dia,hora,id_salon,clase) values("5","1","F201","Calculo 1");
insert into horario (dia,hora,id_salon,clase) values("5","7","F201","Proyectos");
insert into horario (dia,hora,id_salon,clase) values("5","5","F201","Electromagnetica");
insert into horario (dia,hora,id_salon,clase)values("6","1","F201","Mecanica");
insert into horario (dia,hora,id_salon,clase)values("6","2","F201","Integral");
insert into horario (dia,hora,id_salon,clase) values("6","4","F201","Diseño UX");

insert into horario (dia,hora,id_salon,clase) values("5","1","F203","calculo");
insert into horario (dia,hora,id_salon,clase)values("1","2","F203","lea");
insert into horario (dia,hora,id_salon,clase)values("6","5","F203","sistemas 1");
insert into horario (dia,hora,id_salon,clase)values("2","1","F203","redes");
insert into horario (dia,hora,id_salon,clase)values("2","2","F203","fisica");
insert into horario (dia,hora,id_salon,clase) values("2","5","F203","dibujo");
insert into horario (dia,hora,id_salon,clase)values("3","1","F203","redes6");
insert into horario (dia,hora,id_salon,clase)values("3","2","F203","fisica4");
insert into horario (dia,hora,id_salon,clase) values("3","4","F203","dibujo10");
insert into horario (dia,hora,id_salon,clase)values("5","1","F203","programacion");
insert into horario (dia,hora,id_salon,clase)values("5","2","F203","ambiental");
insert into horario (dia,hora,id_salon,clase) values("4","4","F203","modelacion");
insert into horario (dia,hora,id_salon,clase)values("6","1","F203","programacion");
insert into horario (dia,hora,id_salon,clase)values("6","2","F203","ambiental");
insert into horario (dia,hora,id_salon,clase) values("5","4","F203","modelacion");

select * from horario;
Select des.ventilacion,des.num_computadores,des.proyector ,des.televisor,des.sillas,des.toma_corriente,des.tablero from descripcion as des,salones as sa where sa.id_salon = "F101" and sa.id_descripcion=des.id_descripcion;
select dia,hora,clase from horario where id_salon= "F101";
insert into reserva values("0","f101","2020-10-10","11:00:00","calculo");
select *from reserva;
