const empresa = "PASSAREDO";
db.resumoVoos.insertOne({
  empresa,
  totalVoosDomesticos: db.voos.find({
    $and: [{
        "empresa.nome": empresa,
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
