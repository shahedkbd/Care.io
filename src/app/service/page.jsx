import ServiceCard from "@/components/Card/ServiceCard";
import Services from "@/components/Services/Services";
import React from "react";

const ServicePage = () => {
  return (
    <div className="pt-10">
      <div className="text-center mb-4">
        <h2 className="text-3xl md:text-4xl font-bold">Our Care Services</h2>
        <p className="mt-4 max-sm:px-4 text-base-content/70 max-w-2xl mx-auto">
          Professional caregiving services designed to support families at every
          stage of life.
        </p>
      </div>
      <div>
        <Services></Services>
      </div>
    </div>
  );
};

export default ServicePage;
