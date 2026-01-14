"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="hero min-h-[85vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 max-w-6xl">
        
        {/* Image */}
        <Image
          src="https://i.ibb.co.com/XkSqWWxb/images-PKLJZ87.jpg"
          alt="Care service illustration"
          width={1000} height={1000}
          className="max-w-sm rounded-lg shadow-2xl"
        />

        {/* Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Trusted Care Services, <br />
            When You Need Them Most
          </h1>

          <p className="py-6 text-base-content/80 max-w-xl">
            <strong>Care.IO</strong> is a web application that helps users book
            reliable and trusted care services for children, elderly, or sick
            individuals. Users can easily schedule care services based on their
            required time duration and location.
            <br /><br />
            Our mission is to make caregiving simple, safe, and accessible for
            everyone.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <Link href={"/service"} className="btn btn-primary">
              Book Care Now
            </Link>
            
          </div>
        </div>

      </div>
    </section>
  );
}
