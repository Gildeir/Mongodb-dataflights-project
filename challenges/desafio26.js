db.voos.deleteMany({
  $and: [{
      "empresa.nome": "GOL",
    },
    {
      "passageiros.pagos": {
        $lte: 10,
      },
    },
    {
      "passageiros.pagos": {
        $gte: 5,
      },
    },

  ],
});
