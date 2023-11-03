import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import db from "$lib/mongodb/connection"
import { genSalt, hash } from "bcryptjs"

export const POST: RequestHandler = async ({ request }) => { 
  const { username, age, password } = await request.json(); 
    const salt=await genSalt(10)
    const hashedPassword=await hash(password,salt)
    const addUser=await db.collection('users').insertOne({ username, age, password:hashedPassword })
    if(addUser){
      const getUserDetails = await db.collection('users').find({username}).toArray()
      return json({msg:"Registration successfull",body:getUserDetails[0]}); 
    }else{
      return json({error:"Registration unsuccessfull"}); 
    }
};