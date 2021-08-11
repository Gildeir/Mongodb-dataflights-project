db.voos.find({
  natureza: {
    $eq: "Doméstica",
  },
}).count();
