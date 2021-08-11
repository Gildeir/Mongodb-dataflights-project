db.voos.find({
  $or: [{
      "empresa.nome": "DELTA AIRLINES",
    },
    {
      "empresa.nome": "AMERICAN AIRLINES",
    },
  ],
  $and: [{
      "aeroportoOrigem.sigla": "SBGR",
    },

    {
      "aeroportoDestino.sigla": "KJFK",
    },
  ],
}, {
  _id: 0,
  vooId: 1,
}).limit(1);
