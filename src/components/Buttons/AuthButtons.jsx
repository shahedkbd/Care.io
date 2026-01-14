"use client"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link";
import React from 'react';

const AuthButtons = () => {
    const session= useSession()
    return (
        <div>
            {
                session.status === "authenticated" ? (<>
                <button className="btn btn-primary" onClick={()=>signOut()}>Log Out</button>
                </>) : (<>
                <Link href={"/login"}>
                <button className="btn">Login</button>
                </Link>
                </>)
            }
        </div>
    );
};

export default AuthButtons;