const mongoose = require('mongoose');

const connection = mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@fastplaygroundcluster.titgw.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority&appName=FastPlaygroundCluster`
);

module.exports = connection;