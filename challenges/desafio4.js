db.voos.find({
  "empresa.nome": {
    $eq: "GOL",
  },
}).count();
