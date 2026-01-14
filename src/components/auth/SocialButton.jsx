"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const SocialButton = () => {
     const params = useSearchParams();
  const handleGoogleSignIn = async() => {
    // Google auth logic goes here
    console.log("Google Sign In clicked");
     const result = await signIn("google", {
      // redirect: "false",
      callbackUrl: params.get("callbackUrl") || "/",
    });
  };

  return (
    <div className="w-full">
      {/* Divider */}
      <div className="divider text-sm text-gray-400">OR</div>

      {/* Google Button */}
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-outline w-full flex items-center justify-center gap-3"
      >
        <FcGoogle className="text-xl" />
        <span className="font-medium">Continue with Google</span>
      </button>
    </div>
  );
};

export default SocialButton;
