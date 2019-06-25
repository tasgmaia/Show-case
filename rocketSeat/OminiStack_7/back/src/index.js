const express = require('express');
const mongoose = require('mongoose');
const react = require('react');
const app = express();

mongoose.connect('mongodb+srv://semanaomini:aq12WSdE34rf@cluster0-ctfcb.mongodb.net/test?retryWrites=true&w=majority', {
   useNewUrlParser: true, 
});

app.use(require('./routes'));
app.listen(3333);


//PAREI NO VIDEO 39 minutos
