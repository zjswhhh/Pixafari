drop database if exists pixafari;
create database pixafari;

Use pixafari;

drop table if exists user;
drop table if exists trip;
drop table if exists member;
drop table if exists vote;

create table user (
	userID varchar(10),
    userName varchar(20),
    password varchar(100),
    email varchar(30),
    phone varchar(20),
    primary key (userID)
);

create table trip (
	groupID varchar(10),
    trip_name varchar(20),
    start_date date,
    end_date date, 
    budget int,
    destination varchar(20),
    trip_type varchar(20),
    primary key (groupID)
);

create table member (
	groupID varchar(10),
    userID varchar(10),
    primary key(groupID, userID),
    foreign key (groupID) references trip(groupID),
    foreign key (userID) references user (userID)
);

create table vote (
	groupID varchar(10),
    userID varchar(10),
    start_date date,
    end_date date,
    budget int,
    destination varchar(20),
    trip_type varchar(20),
    primary key(groupID, userID),
    foreign key (groupID) references trip(groupID),
    foreign key (userID) references user (userID)
);