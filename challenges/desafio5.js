db.voos.find({}, {
  _id: 0,
  vooId: 1,
}).skip(10).limit(3);
