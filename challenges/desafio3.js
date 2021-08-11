db.voos.find({
  "empresa.nome": {
    $eq: "AZUL",
  },
}).count();
