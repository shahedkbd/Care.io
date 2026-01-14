"use client";
import Image from "next/image";
import CancelButton from "../Buttons/CancelButton";

export const MyBookedCard = ({ singlebooking }) => {
  const {
    title,
    featuredImage,
    durationType,
    duration,
    location,
    unitPrice,
    totalCost,
    status,
    createdAt,
  } = singlebooking;

  return (
    <div className="flex gap-4 items-center bg-base-100 rounded-xl shadow-md p-4 hover:shadow-lg transition">
      {/* Image */}
      <div className="w-24 h-24 relative rounded-lg overflow-hidden shrink-0">
        <Image src={featuredImage} alt={title} fill className="object-cover" />
      </div>

      {/* Main Info */}
      <div className="flex-1 space-y-1">
        <h3 className="text-lg font-semibold">{title}</h3>

        <p className="text-sm text-gray-500">
          {location.city}, {location.district}
        </p>

        <p className="text-sm">
          Duration:{" "}
          <span className="font-medium">
            {duration} {durationType === "hour" ? "Hours" : "Days"}
          </span>
        </p>

        <p className="text-sm">
          Unit Price: <span className="font-medium">৳ {unitPrice}</span>
        </p>
      </div>

      {/* Right Side */}
      <div className="text-right space-y-2">
        <p className="text-xl font-bold text-primary">৳ {totalCost}</p>

        <span
          className={`badge ${
            status === "Pending" ? "badge-warning" : "badge-success"
          }`}
        >
          {status}
        </span>

        <div>
          <p className="text-xs text-gray-400">
            {/* {new Date(createdAt).toLocaleDateString()} */}
            {new Date(createdAt).toDateString()}
          </p>
          <CancelButton singlebooking={singlebooking}></CancelButton>
        </div>
      </div>
    </div>
  );
};
