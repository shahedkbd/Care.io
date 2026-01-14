"use client";

import { FaBaby, FaUserShield, FaHeartbeat } from "react-icons/fa";

export default function ServicesSection() {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Care Services
          </h2>
          <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
            Professional caregiving services designed to support families at
            every stage of life.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* Baby Care */}
          <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow">
            <div className="card-body items-center text-center">
              <FaBaby className="text-5xl text-primary mb-4" />
              <h3 className="card-title text-xl">
                Baby Care
              </h3>
              <p className="text-base-content/70">
                Safe and attentive care for infants and young children, provided
                by trained caregivers who understand the importance of comfort,
                hygiene, and emotional well-being.
              </p>
            </div>
          </div>

          {/* Elderly Service */}
          <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow">
            <div className="card-body items-center text-center">
              <FaUserShield className="text-5xl text-primary mb-4" />
              <h3 className="card-title text-xl">
                Elderly Care
              </h3>
              <p className="text-base-content/70">
                Compassionate support for elderly individuals, including daily
                assistance, mobility help, and companionship to ensure dignity,
                safety, and comfort.
              </p>
            </div>
          </div>

          {/* Sick People Service */}
          <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow">
            <div className="card-body items-center text-center">
              <FaHeartbeat className="text-5xl text-primary mb-4" />
              <h3 className="card-title text-xl">
                Sick People Care
              </h3>
              <p className="text-base-content/70">
                Reliable care for individuals recovering from illness or
                managing health conditions, with focused attention on safety,
                medication reminders, and overall well-being.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
