import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import db from "$lib/mongodb/connection"
import { compare } from "bcryptjs"

export const POST: RequestHandler = async ({ request }) => { 
  const { username, password } = await request.json(); 
  const getUserDetails:any = await db.collection('users').find({username}).toArray()
  const addUser=await compare(password,getUserDetails[0].password)
  if(getUserDetails){
    if(addUser){
      return json({msg:"Login successfull",body:getUserDetails[0]}); 
    }else{
      return json({error:"You've entered the wrong password"}); 
    }
  }else{
    return json({error:`Username ${username} doesn't exist`})
  }
};