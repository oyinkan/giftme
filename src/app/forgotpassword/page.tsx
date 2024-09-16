"use client";
import { useState } from "react";
import AuthComponent from "@/components/auth-component/AuthComponent";
import Button from "@/components/button/Button";

interface FormError {
  email?: string;
}

export default function Page() {
  const [email, setEmail] = useState<string>("");
  const [formError, setFormError] = useState<FormError>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
  };

  const validateForm = () => {
    const error: FormError = {};
    if (!email) {
      error.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      error.email = "Invalid email address";
    }
    setFormError(error);
    return Object.keys(error).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Call API or perform other actions with the form data
    if (validateForm()) {
      // Call API or perform other actions with the form data
      console.log(email);
    }
  };

  return (
    <>
      <div className="p-4">
        <AuthComponent
          title="Forgot Password"
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
              value={email}
              onChange={handleInputChange}
              className="block w-full text-sm p-4 mt-3 border border-[#CBD5E1] rounded-[12px] text-gray-500"
              placeholder="Enter your email address"
            />
            {formError.email && (
              <div className="text-red-500 text-sm">{formError.email}</div>
            )}
          </div>
          <div className="my-6">
            <Button className="bg-primary text-white" value="Continue" />
          </div>
        </form>
      </div>
    </>
  );
}
