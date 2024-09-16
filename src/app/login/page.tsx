"use client";
import AuthComponent from "@/components/auth-component/AuthComponent";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import Button from "@/components/button/Button";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import { useState } from "react";

interface FormData {
  email: string;
  password: string;
}

interface FormError {
  email?: string;
  password?: string;
}

export default function Page() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState<FormError>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const validateForm = () => {
    const error: FormError = {};
    if (!formData.email) {
      error.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      error.email = "Invalid email address";
    }
    if (!formData.password) {
      error.password = "Password is required";
    } else if (formData.password.length < 8) {
      error.password = "Password must be at least 8 characters";
    }
    setFormError(error);
    return Object.keys(error).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Call API or perform other actions with the form data
    if (validateForm()) {
      // Call API or perform other actions with the form data
      console.log(formData);
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-4">
        <AuthComponent
          title="Welcome back home"
          details="Enter the necessary details"
        />
        <form className="w-full md:w-2/5 m-auto mt-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="text-sm text-[#230101]">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="block w-full text-sm p-4 mt-3 border border-[#CBD5E1] rounded-[12px] text-gray-500"
              placeholder="Enter your email address"
            />
            {formError.email && (
              <div className="text-red-500 text-sm">{formError.email}</div>
            )}
          </div>
          <div className="mt-3">
            <label htmlFor="password" className="text-sm text-[#230101]">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="block w-full text-sm p-4 my-3 border border-[#CBD5E1] rounded-[12px] text-gray-500"
              placeholder="Enter your password"
            />
            {formError.password && (
              <div className="text-red-500 text-sm">{formError.password}</div>
            )}
          </div>
          <Link href="/forgotpassword" className="text-sm text-primary">
            Forgot Password
          </Link>
          <div className="my-6">
            <Button className="bg-primary text-white" value="Login" />
          </div>
        </form>
        <div className="w-full md:w-2/5 m-auto">
          <div className="flex justify-center items-center gap-3 my-3">
            <hr className="w-full border border-[#ECECEC]" />
            <span className="text-[12px] text-[#646464]">or</span>
            <hr className="w-full border border-[#ECECEC]" />
          </div>
          <Button
            className="border border-primary"
            value={
              <>
                <FcGoogle className="text-lg mr-4" />
                <span className="text-primary">Continue with Google</span>
              </>
            }
          />
          <Button
            className="border border-primary"
            value={
              <>
                <IoLogoApple className="text-lg mr-4" />
                <span className="text-primary">Continue with Apple</span>
              </>
            }
          />
        </div>
        <p className="text-sm text-dark text-center mt-12">
          Don't have an account?{" "}
          <Link href="/signup" className="font-bold">
            Signup
          </Link>
        </p>
      </div>
    </>
  );
}
