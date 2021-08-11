db.voos.find({
  $and: [{
      litrosCombustivel: {
        $lte: 600,
      },
    },
    {
      litrosCombustivel: {
        $exists: true,
      },
    },
    {
      "empresa.nome": {
        $not: {
          $eq: "GOL",
        },
      },
    }, {
      "empresa.nome": {
        $not: {
          $eq: "AZUL",
        },
      },
    },
  ],
}, {
  _id: 0,
  litrosCombustivel: 1,
  empresa: {
    nome: 1,
  },
  vooId: 1,
}).limit(1);
