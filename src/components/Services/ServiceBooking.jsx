"use client";

import { postServiceBook } from "@/actions/server/serviceBook";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { useState } from "react";
import Swal from "sweetalert2";

export const ServiceBooking = ({ service }) => {
  const { data: session, status } = useSession();
  console.log("Client session:", session, status);

  const router = useRouter();
  const { title, _id, featuredImage, pricing } = service;
  const { hourlyCharge, dailyCharge, dailyDiscountPercent, finalDailyCharge } =
    pricing;

  const [durationType, setDurationType] = useState("hour");
  const [duration, setDuration] = useState(1);

  const [location, setLocation] = useState({
    division: "",
    district: "",
    city: "",
    address: "",
  });

  const [bookingStatus, setBookingStatus] = useState(null);

  // ✅ Correct total cost calculation
  const totalCost =
    durationType === "hour"
      ? duration * hourlyCharge
      : duration * finalDailyCharge;

  const handleConfirmBooking = async () => {
    if (status === "loading") {
      Swal.fire("Wait", "Checking login status...", "info");
      return;
    }

    if (!session?.user?.email) {
      Swal.fire("Error", "Please login first", "error");
      router.push("/login");
      return;
    }
    const bookingData = {
      title,
      _id,
      featuredImage,
      durationType,
      duration,
      location,
      unitPrice: durationType === "hour" ? hourlyCharge : finalDailyCharge,
      totalCost,
      status: "Pending",
      createdAt: new Date().toISOString(),
    };

    const result = await postServiceBook(bookingData);

    if (result.success) {
      Swal.fire("success", "Service Booking Successfully", "success");
      router.push("/");
      console.log("Booking Saved:", bookingData);
      setBookingStatus("Pending");
    } else {
      Swal.fire("err", result.message, "error");
    }
  };

  return (
    <div className="card w-full bg-base-200 shadow-xl">
      <div className="card-body space-y-4 max-w-[600px] mx-auto">
        <h2 className="card-title text-xl">Book This Service</h2>

        {/* Duration Type */}
        <div>
          <label className="label font-medium">Select Duration Type</label>
          <select
            className="select select-bordered w-full"
            value={durationType}
            onChange={(e) => setDurationType(e.target.value)}
          >
            <option value="hour">Hourly</option>
            <option value="day">Daily</option>
          </select>
        </div>

        {/* Duration */}
        <div>
          <label className="label font-medium">
            Number of {durationType === "hour" ? "Hours" : "Days"}
          </label>
          <input
            type="number"
            min="1"
            className="input input-bordered w-full"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
          />
        </div>

        {/* Location */}
        <div className="grid grid-cols-3 gap-3">
          <input
            type="text"
            placeholder="Division"
            className="input input-bordered"
            onChange={(e) =>
              setLocation({ ...location, division: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="District"
            className="input input-bordered"
            onChange={(e) =>
              setLocation({ ...location, district: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="City"
            className="input input-bordered"
            onChange={(e) => setLocation({ ...location, city: e.target.value })}
          />
          <textarea
            placeholder="Area / Full Address"
            className="textarea w-full textarea-bordered col-span-3"
            onChange={(e) =>
              setLocation({ ...location, address: e.target.value })
            }
          />
        </div>

        {/* Pricing Preview */}
        <div className="bg-base-100 p-4 rounded-lg space-y-1">
          {durationType === "day" && (
            <p className="text-sm text-success">
              Daily Discount Applied: {dailyDiscountPercent}%
            </p>
          )}
          <div className="flex justify-between items-center">
            <span className="font-medium">Total Cost</span>
            <span className="text-xl font-bold text-primary">
              ৳ {totalCost}
            </span>
          </div>
        </div>

        {/* Confirm Button */}
        <button
          className="btn btn-primary w-full"
          disabled={status === "loading"}
          onClick={handleConfirmBooking}
        >
          {status === "loading" ? "Checking login..." : "Confirm Booking"}
        </button>

        {/* Status */}
        {bookingStatus && (
          <p className="text-sm text-success text-center">
            Booking Status: <strong>{bookingStatus}</strong>
          </p>
        )}
      </div>
    </div>
  );
};
