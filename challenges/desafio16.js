db.voos.find({
  natureza: {
    $eq: "Internacional",
  },
}).count();
