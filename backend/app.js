const express = require('express');

const app = express();

const blogRoutes = require('./routes/blog');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://marchrys:Mar051731@piiquante.lhf1s.mongodb.net/git?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((error) => console.log(error));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/blog', blogRoutes);

module.exports = app;