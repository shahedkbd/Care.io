"use client";

export default function AboutSection() {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            About Care.IO
          </h2>
          <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
            Redefining caregiving through trust, simplicity, and accessibility.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Text */}
          <div>
            <p className="text-base-content/80 leading-relaxed mb-4">
              <strong>Care.IO</strong> is a digital platform designed to connect
              families with reliable and trusted caregivers for children, elderly,
              and individuals who require medical or personal care.
            </p>

            <p className="text-base-content/80 leading-relaxed mb-4">
              Our platform allows users to easily book care services based on
              their preferred time duration and location. We focus on eliminating
              the traditional challenges of finding safe and dependable care by
              bringing transparency, verified caregivers, and a seamless booking
              experience into one place.
            </p>

            <p className="text-base-content/80 leading-relaxed">
              At Care.IO, our mission is simple yet powerful: to make caregiving
              easy, secure, and accessible for everyone—so families can focus on
              what truly matters: care, comfort, and peace of mind.
            </p>
          </div>

          {/* Visual / Highlights */}
          <div className="grid grid-cols-1 gap-4">
            <div className="card bg-base-200 shadow-sm">
              <div className="card-body">
                <h3 className="font-semibold text-lg">
                  Trusted Caregivers
                </h3>
                <p className="text-sm text-base-content/70">
                  All caregivers are verified to ensure safety, reliability,
                  and quality service.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-sm">
              <div className="card-body">
                <h3 className="font-semibold text-lg">
                  Flexible Booking
                </h3>
                <p className="text-sm text-base-content/70">
                  Book care services based on your schedule, duration, and
                  location with ease.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-sm">
              <div className="card-body">
                <h3 className="font-semibold text-lg">
                  Safe & Accessible
                </h3>
                <p className="text-sm text-base-content/70">
                  Designed to be user-friendly, secure, and accessible for
                  everyone.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
