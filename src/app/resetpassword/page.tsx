"use client";
import { useState } from "react";
import AuthComponent from "@/components/auth-component/AuthComponent";
import Button from "@/components/button/Button";

interface FormData {
  password: string;
  confirm_password: string;
}

interface FormError {
  password?: string;
  confirm_password?: string;
}

export default function Page() {
  const [formData, setFormData] = useState<FormData>({
    password: "",
    confirm_password: "",
  });
  const [formError, setFormError] = useState<FormError>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const validateForm = (): boolean => {
    const error: FormError = {};

    // Password validation: Minimum 8 characters, at least 1 letter and 1 number
    if (formData.password.length < 8) {
      error.password = "Password must be at least 8 characters.";
    } else if (!/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/.test(formData.password)) {
      error.password = "Password must contain both letters and numbers.";
    }

    // Confirm password validation: Must match the password
    if (formData.confirm_password !== formData.password) {
      error.confirm_password = "Passwords do not match.";
    }

    setFormError(error);
    // Return true if no errors
    return Object.keys(error).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      // Call API or perform other actions with the form data
      console.log(formData);
    }
  };

  return (
    <>
      <div className="p-4">
        <AuthComponent
          title="Reset Password"
          details="Enter your new password below"
        />
        <form className="w-full md:w-2/5 m-auto mt-6" onSubmit={handleSubmit}>
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
              <p className="text-sm text-red-500">{formError.password}</p>
            )}
          </div>
          <div className="mt-3">
            <label
              htmlFor="confirm_password"
              className="text-sm text-[#230101]"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleInputChange}
              className="block w-full text-sm p-4 my-3 border border-[#CBD5E1] rounded-[12px] text-gray-500"
              placeholder="Confirm your password"
            />
            {formError.confirm_password && (
              <p className="text-sm text-red-500">
                {formError.confirm_password}
              </p>
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
