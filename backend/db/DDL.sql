CREATE DATABASE store;

\c store;

CREATE TABLE usuarios (
  id           SERIAL       NOT NULL,
  name       VARCHAR(30),
  email        VARCHAR(50)  NOT NULL   UNIQUE,
  password     VARCHAR(250) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE productos (
  id            SERIAL        NOT NULL,
  title        VARCHAR(30)   NOT NULL,
  img           VARCHAR(250)  NOT NULL,
  description   VARCHAR(100)  NOT NULL,
  price        VARCHAR(20)   NOT NULL,
  PRIMARY KEY (id)
);