const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
  //  inserir dados na tabela
  await saveOrphanage(db, {
    lat: '-23.6004957',
    lng: '-46.6399239',
    name: 'Lar dos Meninos',
    about:
      'Presta assitência a crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social',
    whatsapp: '89897474',
    images: [
      'https://images.unsplash.com/photo-1595009545055-d5ec0bb8d732?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9]',
      'https://images.unsplash.com/photo-1601180964546-f5c6ac9fdc14?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
    ].toString(),
    instructions:
      'Venha como se sentir à vontade e traga muito amor e carinho para dar',
    opening_hours: 'Horário de visitas das 8h às 18h',
    open_on_weekends: '0',
  });

  //consultar dados na tabela
  const selectedOrphanages = await db.all('SELECT * FROM orphanages');
  console.log(selectedOrphanages);

  // // // consultar somente 1 orfanato pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');
  console.log(orphanage);

  //deletar dado da tabela
  //await db.run('DELETE FROM tabela WHERE id = "4"');
});
