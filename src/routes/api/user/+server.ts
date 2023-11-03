import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import db from "$lib/mongodb/connection"

export const GET=async()=> {
  const getAllUsers = await db.collection('users').find({}).toArray()  
  return json(
    {
      status: 200,
      body: getAllUsers 
    }
  )
}