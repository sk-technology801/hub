import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

if (!uri) throw new Error("MONGODB_URI not defined in .env");

let client = new MongoClient(uri, options);
let clientPromise = client.connect();

export default clientPromise; // ✅ default export
