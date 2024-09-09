## MEAN Sample
This is a sample app from BezCoder:

### Tutorials

- Overview: [MEAN Stack](https://www.bezkoder.com/angular-17-node-js-express-mongodb/)
- BackEnd:  [Node, Express, Mongo](https://www.bezkoder.com/node-express-mongodb-crud-rest-api/)
- FrontEnd: [Angular CRUD](https://www.bezkoder.com/angular-17-crud-example/)

### Documentation

- [Mongoose 8.6.1](https://mongoosejs.com/docs/index.html)
- [MongoDB 7.x](https://www.mongodb.com/docs/manual/)
- [Angular 17](https://v17.angular.io/docs)
- [Node 22](https://nodejs.org/docs/latest/api/)
- [Express 4.x](https://expressjs.com/)

### Running
Instructions for running the app

#### Pre-requisites
You need to have Node.js installed, as well as a local (or containerized) MongoDB.

#### Running the Back End
From the backend folder, perform the following:

```
$ node install
$ node server.js
```

#### Running the Front End
Front the frontend folder, perform the following:

```
$ node install
$ ng serve --port 8081
```
Make note of the port 8081 that is used by the front end, this is due to the allowed port on the Express backend.  Any other port will return a [Cross Site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/) error.