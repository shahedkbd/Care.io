import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ service }) => {
  const { title, featuredImage, _id } = service;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow rounded-xl overflow-hidden">
      {/* Image */}
      <figure className="h-48 overflow-hidden">
        <Image
          src={featuredImage}
          alt={title}
          width={1000} height={1000}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body flex flex-col justify-between">
        <h2 className="card-title text-lg font-semibold">{title}</h2>

        <Link href={`/service/${_id}`}  className="btn btn-primary mt-4">View Details</Link>
      </div>
    </div>
  );
};

export default ServiceCard;
