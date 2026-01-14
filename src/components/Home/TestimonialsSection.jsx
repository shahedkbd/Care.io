"use client";

import { FaStar, FaUsers, FaCheckCircle, FaHandsHelping } from "react-icons/fa";

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Trusted by Families Across the Community
          </h2>
          <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
            Real experiences and measurable impact that reflect our commitment
            to quality care.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="card bg-base-200 text-center">
            <div className="card-body">
              <FaUsers className="text-4xl mx-auto text-primary" />
              <h3 className="text-2xl font-bold mt-2">5,000+</h3>
              <p className="text-sm text-base-content/70">
                Families Served
              </p>
            </div>
          </div>

          <div className="card bg-base-200 text-center">
            <div className="card-body">
              <FaHandsHelping className="text-4xl mx-auto text-primary" />
              <h3 className="text-2xl font-bold mt-2">1,200+</h3>
              <p className="text-sm text-base-content/70">
                Verified Caregivers
              </p>
            </div>
          </div>

          <div className="card bg-base-200 text-center">
            <div className="card-body">
              <FaCheckCircle className="text-4xl mx-auto text-primary" />
              <h3 className="text-2xl font-bold mt-2">98%</h3>
              <p className="text-sm text-base-content/70">
                Successful Bookings
              </p>
            </div>
          </div>

          <div className="card bg-base-200 text-center">
            <div className="card-body">
              <FaStar className="text-4xl mx-auto text-primary" />
              <h3 className="text-2xl font-bold mt-2">4.9/5</h3>
              <p className="text-sm text-base-content/70">
                Average Rating
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="card bg-base-200 shadow-sm">
            <div className="card-body">
              <p className="text-base-content/80">
                “Care.IO made it incredibly easy to find a trustworthy caregiver
                for my elderly father. The service was professional and reliable.”
              </p>
              <div className="mt-4">
                <h4 className="font-semibold">Ayesha Rahman</h4>
                <p className="text-sm text-base-content/60">
                  Elderly Care User
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-sm">
            <div className="card-body">
              <p className="text-base-content/80">
                “As a working parent, Care.IO gave me peace of mind. Booking baby
                care was simple, fast, and completely stress-free.”
              </p>
              <div className="mt-4">
                <h4 className="font-semibold">Tanvir Hasan</h4>
                <p className="text-sm text-base-content/60">
                  Baby Care User
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-sm">
            <div className="card-body">
              <p className="text-base-content/80">
                “The caregiver support during my recovery period was excellent.
                Care.IO truly delivers care you can trust.”
              </p>
              <div className="mt-4">
                <h4 className="font-semibold">Nusrat Jahan</h4>
                <p className="text-sm text-base-content/60">
                  Patient Care User
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
