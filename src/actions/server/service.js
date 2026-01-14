"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getServices = async () => {
  const Services = await dbConnect(collections.SERVICE).find().toArray();
  return Services;
};

export const getSingleService = async (id) => {
  if (id.length != 24) return {};

  const query = { _id: new ObjectId(id) };
  const service = await dbConnect(collections.SERVICE).findOne(query);
  return { ...service, _id: service._id.toString() } || {};
};
