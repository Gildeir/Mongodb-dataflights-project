db.voos.find({
  vooId: 756807 }, {
  _id: 0,
  empresa: {
    sigla: 1,
    nome: 1,
  },
  passageiros: 1,
});
