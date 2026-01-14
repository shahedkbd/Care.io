"use client";

import Link from "next/link";
import { useState } from "react";
import SocialButton from "./SocialButton";
import { postUser } from "@/actions/server/auth";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Swal from "sweetalert2";

const RegisterForm = () => {
  const params = useSearchParams();
  const router = useRouter();
  const callbackUrl = params.get("callbackUrl") || "/";
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    nid: "",
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    if (name === "password") {
      setError(validatePassword(value));
    }
  };

  const validatePassword = (value) => {
    const hasUppercase = /[A-Z]/.test(value);
    const hasLowercase = /[a-z]/.test(value);
    const hasMinLength = value.length >= 6;

    if (!hasMinLength) {
      return "Password must be at least 6 characters long";
    }
    if (!hasUppercase) {
      return "Password must contain at least one uppercase letter";
    }
    if (!hasLowercase) {
      return "Password must contain at least one lowercase letter";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validatePassword(form.password);
    if (validationError) {
      setError(validationError);
      return;
    }

    const result = await postUser(form);

    if (result.acknowledged) {
      const result = await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
        callbackUrl: callbackUrl,
      });

      if (result.ok) {
        Swal.fire("Success", "Registered Successfully", "success");
        router.push(callbackUrl);
      
    }
    } else {
        Swal.fire("error", "এই gmail এ  একটি একাউন্ট আছে । লগিন করুন ", "error");
      }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-[420px] bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Create Account</h2>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            {/* NID */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">NID No</span>
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="nid"
                placeholder="Enter your NID number"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                onChange={handleChange}
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                onChange={handleChange}
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Contact */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Contact Number</span>
              </label>
              <input
                type="tel"
                onChange={handleChange}
                name="phone"
                placeholder="01XXXXXXXXX"
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
                onChange={handleChange}
                placeholder="Create a strong password"
                className={`input input-bordered w-full ${
                  error ? "input-error" : ""
                }`}
                required
              />

              {error && (
                <label className="label">
                  <span className="label-text-alt text-error">{error}</span>
                </label>
              )}
            </div>

            {/* Submit */}
            <button className="btn btn-primary w-full" disabled={!!error}>
              Register
            </button>
          </form>

          <SocialButton />

          <p className="text-center text-sm mt-4">
            Already have an account?
            <span className="link link-primary ml-1 cursor-pointer">
              <Link href={"/login"}>Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default RegisterForm;
