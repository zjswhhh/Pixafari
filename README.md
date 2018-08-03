# Pixafari Tech Overview

## To start the app:

      1. (one time) Install node.js on your laptop by downloading here https://nodejs.org/en/
      2. (one time) Clone the Github repository
      3. Go inside the main Pixafari folder through command line
      4. Enter "npm install -g"
      5. Once the installation is over, enter "npm start"
      6. A browser will automatically opens up and the server will run in the background
      7. Note: if there are some error, try npm install inside both front-end and back-end

## Frontend - May

React.js: Javascript

### Week 2 Tasks to accomplish
      1. Build invitation pop up (done!)
      2. Build profile page (done!)
      3. Build final result page (done!)

### Week 3 Tasks to accomplish
      1. Build SignIn page
      2. Build AboutUS page
     
## Backend - Muhammad

Express: Javascript
Nodejs

### Week 2 Tasks to accomplish

      1. Build the backend structure for express and nodejs
      2. Build the authentification system using Passport.js
      http://programmerblog.net/nodejs-passport-login-mysql/
      https://www.djamware.com/post/5a90c37980aca7059c14297a/securing-mern-stack-web-application-using-passport
      
### Week 3 Tasks to accomplish
      1. Build the authentification system using Passport.js
      http://programmerblog.net/nodejs-passport-login-mysql/
      https://www.djamware.com/post/5a90c37980aca7059c14297a/securing-mern-stack-web-application-using-passport
      2. Gmail login and work with Jing to sync to database

### Further Tasks to Accomplish in Backend (Tentative timeline with 3 backend developers working in Fall 2018)

      1. Alogrithm to email collaborators - 1st Sept 2018 to 22nd Sept 2018

      2. Alogrithm to update votes based on user input and display the top votes in the result page - 1st Sept 2018 to 28nd Sept 2018

      3. Alogrithm to create recommendation ( https://blog.dominodatalab.com/recommender-systems-collaborative-filtering/) - 1st Sept 2018 to 28nd Sept 2018

## Database - Jing Zhang

MySQL

### Week 2 Tasks to accomplish

      1. Establish connection between the server and the React Frontend (done!)
      2. Once the connection exists, start taking in user input data from forms as front-end develope (done!)
      
### Week 3 Tasks to accomplish

      1. Connect Database to Profile Page 
      2. Connect Database to Result Page (Done!)
      3. Connect Database to Invitation Pop-Up

## File Structures

- frontend/ _- Front End Folder_
  - public/ - _Static Files Directory_
  - src/ - _React Components Directory_
  - app.js - _Client side main_
- backend/
  - config _- App configuration_
  - resources _- miscellaneous items_
  - route _- Route definitions_
  - utils/ _- Files containing utility methods_
  - views/ _- Server Side Views (jade, or handlebars, ..)_
  - index.js - _Server side main_
- package.json
