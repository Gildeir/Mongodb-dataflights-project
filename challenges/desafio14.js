db.voos.find({
  "aeroportoOrigem.pais": {
    $not: {
      $eq: "BRASIL",
    },
  },

}).count();
