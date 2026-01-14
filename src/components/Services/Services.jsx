import { getServices } from "@/actions/server/service";
import React from "react";
import ServiceCard from "../Card/ServiceCard";

const Services = async () => {
  const services = await getServices();
  // console.log(services);

  return (
    <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-md:px-8 gap-5 max-sm:px-5 px-30 py-10">
      {services.map((service) => (
        <ServiceCard key={service._id} service={service}></ServiceCard>
      ))}
    </div>
  );
};

export default Services;
