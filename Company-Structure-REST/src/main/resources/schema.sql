CREATE TABLE IF NOT EXISTS Employee (
 ID bigint NOT NULL generated by default as identity,
 NAME varchar(200) NOT NULL,
 MANAGER_ID bigint,
 PRIMARY KEY (ID),
 FOREIGN KEY (MANAGER_ID) REFERENCES Employee (ID)
);