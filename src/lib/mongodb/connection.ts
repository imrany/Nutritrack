import { MongoClient } from "mongodb"
import { DATABASE } from '$env/static/private';
const client = new MongoClient(DATABASE)
await client.connect()
export default client.db('nutritrack')