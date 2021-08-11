db.voos.find({
  "aeroportoDestino.pais": {
    $not: {
      $eq: "ESTADOS UNIDOS",
    },
  },
}).count();
