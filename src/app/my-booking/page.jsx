import { getAllMyBookedService } from "@/actions/server/myBookedService";
import { MyBookedCard } from "@/components/Card/MyBookedCard";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const MyBookingPage = async () => {
  
  const session = await getServerSession(authOptions)

  if(!session){
    redirect("/login?callbackUrl=/my-booking")
  }

  const mybookedRaw = await getAllMyBookedService();

  // Convert to plain objects
  const mybooked = mybookedRaw.map((b) => ({
    ...b,
    _id: b._id.toString(), // ObjectId → string
    createdAt:
      typeof b.createdAt === "string"
        ? b.createdAt
        : new Date(b.createdAt).toISOString(), // Date → string
  }));

  return (
    <div className="space-y-4 p-4">
      <h1 className="text-2xl font-bold mb-4">My Booking Page</h1>

      {mybooked.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {mybooked.map((singlebooking) => (
            <MyBookedCard
              key={singlebooking._id}
              singlebooking={singlebooking}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookingPage;
