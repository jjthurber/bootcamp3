//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb+srv://jthurber17:1234@cluster0-bvvme.mongodb.net/test?retryWrites=true&w=majority'//place the URI of your mongo database here.
  }, 
  openCage: {
    key: '1eb558d56dda4e439d9fa005fb478c61' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};