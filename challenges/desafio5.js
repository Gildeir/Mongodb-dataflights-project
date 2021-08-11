db.voos.find({}, {
  _id: 0,
  vooId: 1,
}).skip(9).limit(3);