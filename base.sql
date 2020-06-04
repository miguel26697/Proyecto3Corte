create database sergio; 
use sergio;

create table usuario(
correo varchar(100) primary key,
nombre varchar(30),
clave varchar(10)
);

create table salones(
id_salon varchar(20) primary key,
capacidad integer,
tipo varchar(30)
);

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

//hola,
