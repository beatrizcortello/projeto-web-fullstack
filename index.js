'use strict'

var mongoose = require('mongoos');

mongoose.Promisse = global.Promisse;
mongoose.connect('mongodb://localhost:27017/projeto-web-fullstack', {useMongoClient: true})

.then(() =>  {

    console.log("Conexão realizada com sucesso!")

})

.catch(err => console.log(err));