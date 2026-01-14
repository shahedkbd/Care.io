"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const BookServiceButton = ({ service }) => {
  const { bookButtonText, _id } = service;
    const path = usePathname()
    const router = useRouter()

    const { data: session, status } = useSession();

    const handleClick= (e)=>{
        if(status === "loading") return;

        if(!session?.user){
            e.preventDefault()
            router.push(`/login?callbackUrl=${path}`)
            return
        }
    }
    


  return (
    <Link href={`/booking/${_id}?callbackUrl=${path}`} onClick={handleClick} className="btn btn-primary w-full">
      {bookButtonText}
    </Link>
  );
};

export default BookServiceButton;
