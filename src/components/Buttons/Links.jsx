"use client";
import React from "react";
import NavLink from "./NavLink";
import { useSession } from "next-auth/react";

const Links = () => {
  const {session, status} = useSession();
  return (
    <div className="max-lg:flex max-lg:flex-col flex ">
      <li className="px-1">
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li className="px-1">
        <NavLink href={"/service"}>Service</NavLink>
      </li>
      {status === "authenticated" &&
        <li className="px-1">
          <NavLink href={"/my-booking"}>My Booking</NavLink>
        </li>
      }
    </div>
  );
};

export default Links;
