"use server";

import { adminOrderNotificationTemplate } from "@/lib/adminOrderNotificationTemplate";
import { authOptions } from "@/lib/authOptions";
import { collections, dbConnect } from "@/lib/dbConnect";
import { sendEmail } from "@/lib/sendEmail";
import { ServiceBookedInvoice } from "@/lib/ServiceBookedInvoice";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";

export const postServiceBook = async (payload) => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  const {
    durationType,
    duration,
    location,
    unitPrice,
    totalCost,
    title,
    _id,
    featuredImage,
  } = payload;
  console.log("SERVER RECEIVED:", payload);

  // Basic validation (no BS)
  if (
    !durationType ||
    !duration ||
    !location ||
    !unitPrice ||
    !totalCost ||
    !title ||
    !_id ||
    !featuredImage
  ) {
    return {
      success: false,
      message: "Invalid booking data",
    };
  }

  const item = {
    title,
    durationType,
    duration,
    unitPrice,
  };

  const orderId = `CARE-${Date.now()}`; // or any custom logic

  const newBookingData = {
    orderId,
    userEmail: session.user.email, // 🔐 TRUSTED
    title,
    service_id: _id,
    featuredImage,
    durationType,
    duration,
    location,
    unitPrice,
    totalCost,
    status: "Pending",
    createdAt: new Date().toISOString(),
  };

  const result = await dbConnect(collections.SERVICEBOOK).insertOne(
    newBookingData
  );

  const totalPrice = item.unitPrice * item.duration;

  await sendEmail({
    to: session.user.email,
    subject: "🎉Your Order Invoice - Care.io",
    html: ServiceBookedInvoice({
      orderId,
      item,
      totalPrice,
    }),
  });

  await sendEmail({
    to: "mdshahedulalamk@gmail.com",
    subject: "Congrates🔥. New Sell  from Care.io",
    html: adminOrderNotificationTemplate({
      orderId,
      item,
      totalPrice,
      address: location,
      name: session.user.name,
      email: session.user.email,
    }),
  });

  return {
    success: true,
    insertedId: result.insertedId?.toString(),
  };
};

export const deleteBookedService = async ({ id }) => {
  if (!id) throw new Error("Missing order id");

  const result = await dbConnect(collections.SERVICEBOOK).deleteOne({
    orderId: id,
  });

  return result;
};
