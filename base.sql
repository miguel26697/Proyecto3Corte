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

insert into descripcion values ("1","Natural",1,"si","no","individuales",4,"sencillo");
insert into descripcion values ("2","Aire acondicionado",1,"si","no","individuales",4,"doble");
insert into descripcion values ("3","Natural",1,"si","no","oficina",4,"sencillo");
insert into descripcion values ("4","Aire acondicionado",1,"si","si","oficina",10,"sencillo");
insert into descripcion values ("5","Aire acondicionado",1,"no","si","individuales",6,"sencillo");

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


create table reserva(
id_reserva varchar(10) primary key,
correo varchar(100),
id_salon varchar(20),
foreign key (id_salon) references salones(id_salon),
foreign key (correo) references usuario(correo),
dia_reserva date,
hora_resrva time,
tema varchar(50)
);

