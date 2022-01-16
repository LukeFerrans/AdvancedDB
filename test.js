const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGODB_URI } = process.env;
console.log(MONGODB_URI);
const client = new MongoClient(MONGODB_URI);
console.log("running");
async function main() {
  try {
    await client.connect();
    const db = client.db("Register");
    const collection = db.collection("Register");
    // type in your query down here
    const results = await collection.find({}).limit(5).toArray();
    console.log("here are the results");
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
main();
