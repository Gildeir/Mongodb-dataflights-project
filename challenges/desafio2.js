db.voos.find({
  "empresa.nome": {
    $eq: "AZUL",
  },
}).limit(10);
