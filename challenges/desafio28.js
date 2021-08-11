const empresa = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne({
  empresa,
  totalVoosDomesticos: db.voos.find({
    $and: [{
        "empresa.nome": "LATAM AIRLINES BRASIL",
      },
      {
        natureza: "Doméstica",
      },
    ],
  }).count(),

});

db.resumoVoos.find({
  empresa,
}, {
  _id: false,
}).limit(1);