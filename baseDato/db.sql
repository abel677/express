create database if not exists medical;
use medical;

create table pacientes
(
	id int not null auto_increment,
    nombre varchar(50),
    apellido varchar(50),
    cedula numeric(10),
    telefono numeric(10),
    direccion varchar(50),
    correo varchar(50),
    estado boolean,
    primary key(id)
);
select *from pacientes;
drop table pacientes;
delete from pacientes;
insert into pacientes values(1,"abel","andrade",1315812766,0981976667,"la karina","abel@gmail.com",true);
insert into pacientes values(2,"jose","vera",1315812766,0981976667,"la karina","abel@gmail.com",true);
select *from pacientes;
drop database medical;
alter table pacientes AUTO_INCREMENT=0;

