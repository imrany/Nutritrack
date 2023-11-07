import { MongoClient } from "mongodb"
import { DATABASE } from '$env/static/private';
const client = new MongoClient(DATABASE)
const connect_to_mongoDB=async()=>{
    try {
        await client.connect()
    } catch (error:any) {
        console.log(error)
    }
}
connect_to_mongoDB()
export default client.db('nutritrack')