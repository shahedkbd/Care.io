"use client";

import Link from "next/link";
import SocialButton from "./SocialButton";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Swal from "sweetalert2";
import { useState } from "react";

const LoginForm = () => {
    const [loading, setLoading] = useState(false);
  const params = useSearchParams();
  const router = useRouter();
  const callback = params.get("callbackUrl") || "/";

  const handleLogin = async (e) => {
    setLoading(true)
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: params.get("callbackUrl") || "/",
    });

    if (!result.ok) {
      Swal.fire(
        "error",
        "Email password not Matched . Try Google Login / Register",
        "error"
      );
    } else {
      Swal.fire("success", "Welcome to Kidz Hub", "success");
      router.push(callback);
    }
    setLoading(false)
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-[380px] bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Login</h2>

          <form onSubmit={handleLogin} className="space-y-4 mt-4">
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Button */}
            <button className="btn btn-primary w-full">Login</button>
          </form>

          <SocialButton />

          {/* Footer */}
          <p className="text-center text-sm mt-4">
            Don’t have an account?
            <span className="link link-primary ml-1 cursor-pointer">
              <Link href={"/register"}>Register</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
