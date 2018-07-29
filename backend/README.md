# Instructions on setting up Pixafari's databse server (to be removed)

## Initialize MySQL database
1. Make sure you have installed MySQL on your computer <br>
If you have never installed it, you can download the MySQL community server here: https://dev.mysql.com/downloads/mysql/  <br>
Also, MySQL Workbench is a very convenient tool for developers: https://dev.mysql.com/downloads/workbench/

2. Make sure MySQL server is running. 
To ensure the backend running successfully, you need to check if the MySQL server is always on. <br>
![checkMySQLinstalled](https://github.com/zjswhhh/Pixafari/blob/master/backend/img/instruction1.png)
![checkMySQLinstalled](https://github.com/zjswhhh/Pixafari/blob/master/backend/img/instruction2.png)

3. Run DATABASE_INITIALIZE.sql script (which is located in the backend folder) 

## start the server
Step 1: open one terminal, cd to the backend directory <br>
Step 2: run  `npm install` <br>
Step 2: run `nodemon index.js` <br>

Nodemon  will monitor for any changes in the source and automatically restart the server, which is super useful for development. 

![nodemon](https://github.com/zjswhhh/Pixafari/blob/master/backend/img/instruction3.png)
