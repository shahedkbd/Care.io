"use client"
import Link from "next/link";
import { FaArrowLeft, FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card bg-base-100 shadow-xl max-w-md w-full text-center">
        <div className="card-body space-y-4">
          <h1 className="text-6xl font-extrabold text-primary">404</h1>

          <h2 className="text-2xl font-bold">Page Not Found</h2>

          <p className="text-base-content/70">
            Looks like you took a wrong turn.  
            The page you’re looking for doesn’t exist or was moved.
          </p>

          <div className="flex gap-3 justify-center pt-4">
            <Link href="/" className="btn btn-primary gap-2">
              <FaHome />
              Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="btn btn-outline gap-2"
            >
              <FaArrowLeft />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
