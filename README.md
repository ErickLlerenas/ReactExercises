# ReactExercises 
## React Exercises for learning the React library. 
* [Administrador Veterinaria](https://administradorveterinaria.netlify.com/)
* [Noticias API](https://noticiasapi.netlify.com/)
* [Eventos API](https://eventosapi.netlify.com/)
* [Clima API](https://climaapi.netlify.com/)
* [Citas APP](https://citasapp.netlify.com/)

<code>
#
# DUMP FILE
#
# Database is ported from MS Access
#------------------------------------------------------------------
# Created using "MS Access to MySQL" form http://www.bullzip.com
# Program Version 5.5.282
#
# OPTIONS:
#   sourcefilename=C:/Users/Erick/Documents/Tareas/3 Semestre/BASES DE DATOS/Premier/CPremier.mdb
#   sourceusername=
#   sourcepassword=
#   sourcesystemdatabase=
#   destinationdatabase=cpremier
#   storageengine=MyISAM
#   dropdatabase=0
#   createtables=1
#   unicode=1
#   autocommit=1
#   transferdefaultvalues=1
#   transferindexes=1
#   transferautonumbers=1
#   transferrecords=1
#   columnlist=1
#   tableprefix=
#   negativeboolean=0
#   ignorelargeblobs=0
#   memotype=LONGTEXT
#   datetimetype=DATETIME
#

CREATE DATABASE IF NOT EXISTS `cpremier`;
USE `cpremier`;

#
# Table structure for table 'Asignacion'
#

DROP TABLE IF EXISTS `Asignacion`;

CREATE TABLE `Asignacion` (
  `Id_Trabajador` INTEGER NOT NULL DEFAULT 0, 
  `Id_Edificio` INTEGER NOT NULL DEFAULT 0, 
  `Fecha_Inicio` DATETIME NOT NULL, 
  `Num_Dias` INTEGER DEFAULT 0, 
  INDEX (`Id_Edificio`), 
  INDEX (`Id_Trabajador`), 
  PRIMARY KEY (`Id_Trabajador`, `Id_Edificio`, `Fecha_Inicio`)
) ENGINE=myisam DEFAULT CHARSET=utf8;

SET autocommit=1;

#
# Dumping data for table 'Asignacion'
#

INSERT INTO `Asignacion` (`Id_Trabajador`, `Id_Edificio`, `Fecha_Inicio`, `Num_Dias`) VALUES (1235, 312, '2006-10-10 00:00:00', 5);
INSERT INTO `Asignacion` (`Id_Trabajador`, `Id_Edificio`, `Fecha_Inicio`, `Num_Dias`) VALUES (1235, 515, '2006-10-17 00:00:00', 22);
INSERT INTO `Asignacion` (`Id_Trabajador`, `Id_Edificio`, `Fecha_Inicio`, `Num_Dias`) VALUES (1311, 435, '2006-10-08 00:00:00', 12);
INSERT INTO `Asignacion` (`Id_Trabajador`, `Id_Edificio`, `Fecha_Inicio`, `Num_Dias`) VALUES (1311, 460, '2006-10-23 00:00:00', 24);
INSERT INTO `Asignacion` (`Id_Trabajador`, `Id_Edificio`, `Fecha_Inicio`, `Num_Dias`) VALUES (1412, 111, '2006-12-01 00:00:00', 4);
INSERT INTO `Asignacion` (`Id_Trabajador`, `Id_Edificio`, `Fecha_Inicio`, `Num_Dias`) VALUES (1412, 210, '2006-11-15 00:00:00', 12);
INSERT INTO `Asignacion` (`Id_Trabajador`, `Id_Edificio`, `Fecha_Inicio`, `Num_Dias`) VALUES (1412, 312, '2006-10-01 00:00:00', 10);
INSERT INTO `Asignacion` (`Id_Trabajador`, `Id_Edificio`, `Fecha_Inicio`, `Num_Dias`) VALUES (1412, 435, '2006-10-15 00:00:00', 15);
INSERT INTO `Asignacion` (`Id_Trabajador`, `Id_Edificio`, `Fecha_Inicio`, `Num_Dias`) VALUES (1412, 460, '2006-12-08 00:00:00', 18);
INSERT INTO `Asignacion` (`Id_Trabajador`, `Id_Edificio`, `Fecha_Inicio`, `Num_Dias`) VALUES (1412, 515, '2006-11-05 00:00:00', 8);
INSERT INTO `Asignacion` (`Id_Trabajador`, `Id_Edificio`, `Fecha_Inicio`, `Num_Dias`) VALUES (1520, 312, '2006-10-30 00:00:00', 17);
INSERT INTO `Asignacion` (`Id_Trabajador`, `Id_Edificio`, `Fecha_Inicio`, `Num_Dias`) VALUES (1520, 515, '2006-10-09 00:00:00', 14);
INSERT INTO `Asignacion` (`Id_Trabajador`, `Id_Edificio`, `Fecha_Inicio`, `Num_Dias`) VALUES (2920, 210, '2006-11-10 00:00:00', 15);
INSERT INTO `Asignacion` (`Id_Trabajador`, `Id_Edificio`, `Fecha_Inicio`, `Num_Dias`) VALUES (2920, 435, '2006-10-28 00:00:00', 10);
INSERT INTO `Asignacion` (`Id_Trabajador`, `Id_Edificio`, `Fecha_Inicio`, `Num_Dias`) VALUES (2920, 460, '2006-10-05 00:00:00', 18);
INSERT INTO `Asignacion` (`Id_Trabajador`, `Id_Edificio`, `Fecha_Inicio`, `Num_Dias`) VALUES (3001, 111, '2006-10-08 00:00:00', 14);
INSERT INTO `Asignacion` (`Id_Trabajador`, `Id_Edificio`, `Fecha_Inicio`, `Num_Dias`) VALUES (3001, 210, '2006-10-27 00:00:00', 14);
INSERT INTO `Asignacion` (`Id_Trabajador`, `Id_Edificio`, `Fecha_Inicio`, `Num_Dias`) VALUES (3231, 111, '2006-10-10 00:00:00', 8);
INSERT INTO `Asignacion` (`Id_Trabajador`, `Id_Edificio`, `Fecha_Inicio`, `Num_Dias`) VALUES (3231, 312, '2006-10-24 00:00:00', 20);
# 19 records

#
# Table structure for table 'Edificio'
#

DROP TABLE IF EXISTS `Edificio`;

CREATE TABLE `Edificio` (
  `Id_Edificio` INTEGER NOT NULL DEFAULT 0, 
  `Direccion` VARCHAR(50), 
  `Tipo` VARCHAR(50), 
  `Nivel_Calidad` INTEGER DEFAULT 0, 
  `Categoria` INTEGER DEFAULT 0, 
  INDEX (`Id_Edificio`), 
  PRIMARY KEY (`Id_Edificio`)
) ENGINE=myisam DEFAULT CHARSET=utf8;

SET autocommit=1;

#
# Dumping data for table 'Edificio'
#

INSERT INTO `Edificio` (`Id_Edificio`, `Direccion`, `Tipo`, `Nivel_Calidad`, `Categoria`) VALUES (111, '1213 Aspen', 'Oficina', 3, 1);
INSERT INTO `Edificio` (`Id_Edificio`, `Direccion`, `Tipo`, `Nivel_Calidad`, `Categoria`) VALUES (210, '1011 Birch', 'Oficina', 3, 1);
INSERT INTO `Edificio` (`Id_Edificio`, `Direccion`, `Tipo`, `Nivel_Calidad`, `Categoria`) VALUES (312, '123 Elm', 'Oficina', 2, 2);
INSERT INTO `Edificio` (`Id_Edificio`, `Direccion`, `Tipo`, `Nivel_Calidad`, `Categoria`) VALUES (435, '456 Maple', 'Comercio', 1, 1);
INSERT INTO `Edificio` (`Id_Edificio`, `Direccion`, `Tipo`, `Nivel_Calidad`, `Categoria`) VALUES (460, '1415 Beech', 'Almacén', 3, 3);
INSERT INTO `Edificio` (`Id_Edificio`, `Direccion`, `Tipo`, `Nivel_Calidad`, `Categoria`) VALUES (515, '789 Oak', 'Residencia', 3, 1);
# 6 records

#
# Table structure for table 'Trabajador'
#

DROP TABLE IF EXISTS `Trabajador`;

CREATE TABLE `Trabajador` (
  `Id_Trabajador` INTEGER NOT NULL DEFAULT 0, 
  `Nombre` VARCHAR(50), 
  `Tarifa_Hr` DECIMAL(19,4) DEFAULT 0, 
  `Tipo_de_Oficio` VARCHAR(50), 
  `Id_Supv` INTEGER DEFAULT 0, 
  INDEX (`Tipo_de_Oficio`), 
  INDEX (`Id_Trabajador`), 
  INDEX (`Id_Supv`), 
  PRIMARY KEY (`Id_Trabajador`)
) ENGINE=myisam DEFAULT CHARSET=utf8;

SET autocommit=1;

#
# Dumping data for table 'Trabajador'
#

INSERT INTO `Trabajador` (`Id_Trabajador`, `Nombre`, `Tarifa_Hr`, `Tipo_de_Oficio`, `Id_Supv`) VALUES (1235, 'M Faraday', 12.5, 'Electricista', 1311);
INSERT INTO `Trabajador` (`Id_Trabajador`, `Nombre`, `Tarifa_Hr`, `Tipo_de_Oficio`, `Id_Supv`) VALUES (1311, 'C Coulomb', 15.5, 'Electricista', 1311);
INSERT INTO `Trabajador` (`Id_Trabajador`, `Nombre`, `Tarifa_Hr`, `Tipo_de_Oficio`, `Id_Supv`) VALUES (1412, 'C Nemo', 13.75, 'Fontanero', 1520);
INSERT INTO `Trabajador` (`Id_Trabajador`, `Nombre`, `Tarifa_Hr`, `Tipo_de_Oficio`, `Id_Supv`) VALUES (1520, 'H Rickover', 11.75, 'Fontanero', 1520);
INSERT INTO `Trabajador` (`Id_Trabajador`, `Nombre`, `Tarifa_Hr`, `Tipo_de_Oficio`, `Id_Supv`) VALUES (2920, 'R Garret', 10, 'Albañil', 2920);



</code>

