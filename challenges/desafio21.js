db.voos.find({
  litrosCombustivel: {
    $gte: 1000,
  },
}, {
  _id: 0,
  vooId: 1,

}).limit(1);
