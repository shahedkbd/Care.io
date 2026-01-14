import { getSingleService } from "@/actions/server/service";
import BookServiceButton from "@/components/Buttons/BookServiceButton";
import PricingCard from "@/components/Card/PricingCard";
import Image from "next/image";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const service = await getSingleService(id);
 
  // console.log(service);
  const { title } = service;
  // Later replace this with real DB/API fetch
  

  

  return {
    title: `${title} | Care.xyz`,
    description:
      "Care.IO provides trusted baby care, elderly care, and sick people care services. Book professional caregiving services based on your preferred duration and location with confidence.",

    openGraph: {
      title: `${title} | Care.xyz`,
      description:
        "Book reliable caregiving services with Care.IO. Safe, verified caregivers for babies, elderly, and sick individuals.",
      url: `https://care-io-delta.vercel.app/service/${id}`,
      siteName: "Care.IO",
      images: [
        {
          url: "https://i.ibb.co.com/P0VvtVT/image.png",
          width: 1200,
          height: 630,
          alt: `${title} – Care.IO Service Details`,
        },
      ],
      type: "website",
    },

    icons: {
      icon: "https://i.ibb.co.com/tPb0RZxB/logo.png",
      apple: "https://i.ibb.co.com/tPb0RZxB/logo.png",
    },

    metadataBase: new URL("https://care-io-delta.vercel.app"),
  };
};

const ServiceDetailPage = async ({ params }) => {
  const { id } = await params;
  const service = await getSingleService(id);
  if (!service || !service.serviceDetail) {
    notFound(); // triggers your 404 page
  }
  // console.log(service);
  const { title, featuredImage, serviceDetail, bookButtonText, pricing } =
    service;

  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-5xl mx-auto px-4">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6">{title}</h1>

        {/* Featured Image */}
        <div className="mb-8">
          <Image
            src={featuredImage}
            alt={title}
            width={1000}
            height={1000}
            className="w-full max-h-[420px] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Content + CTA */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Service Details */}
          <div className="md:col-span-2">
            {serviceDetail.split("\n\n")?.map((para, index) => (
              <p
                key={index}
                className="mb-4 text-base-content/80 leading-relaxed"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Booking Card */}
          <div className="md:col-span-1">
            <PricingCard pricing={pricing}></PricingCard>
            <div className="card bg-base-200 shadow-lg mt-5">
              <div className="card-body">
                <h3 className="text-xl font-semibold mb-2">Ready to Book?</h3>

                <p className="text-sm text-base-content/70 mb-4">
                  Choose your preferred time and location to book this care
                  service securely.
                </p>

                <BookServiceButton service={service}></BookServiceButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailPage;
