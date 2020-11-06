//importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//iniciando o express
const server = express();
server
  //utilizar body do req
  .use(express.urlencoded({ extended: true }))
  //arquivos estáticos
  .use(express.static('public'))

  //configurar tamplete engine
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'hbs')

  //criar rotas
  .get('/', pages.index)
  .get('/orphanage', pages.orphanage)
  .get('/orphanages', pages.orphanages)
  .get('/create-orphanage', pages.createOrphanage)
  .post('/save-orphanage', pages.saveOrphanage);

//ligar o servidor - em qual porta o servidor vai escutar
server.listen(5500);
