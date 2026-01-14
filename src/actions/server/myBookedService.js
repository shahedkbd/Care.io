"use server"

import { authOptions } from "@/lib/authOptions"
import { collections, dbConnect } from "@/lib/dbConnect"
import { getServerSession } from "next-auth"

export const getAllMyBookedService =async () =>{
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) return [];
    const email = session.user.email 
    const myBookedService = await dbConnect(collections.SERVICEBOOK).find({userEmail: email}).toArray()
    return myBookedService
}