
import User from "@/models/Users";
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async(request) =>{
   try{
   
    const users=await User.find()
    return new NextResponse(users,{status:200});
   }
   catch(err){
    return new NextResponse(err,{status:500});
   }
}