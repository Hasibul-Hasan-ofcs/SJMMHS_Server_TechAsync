const { MongoClient, ServerApiVersion } = require("mongodb");

const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const uri = `mongodb+srv://${dbUsername}:${dbPassword}@sjmmhs-techasync.aludcqr.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

module.exports = client;
